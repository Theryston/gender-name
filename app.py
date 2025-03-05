from flask import Flask, request, jsonify, redirect
from predict import predict_gender
import time
from peewee import *
from models import models
import os
import datetime
import dotenv

dotenv.load_dotenv()

db = PostgresqlDatabase(
    os.environ.get('DB_NAME'),
    user=os.environ.get('DB_USER'),
    password=os.environ.get('DB_PASSWORD'),
    host=os.environ.get('DB_HOST'),
    port=int(os.environ.get('DB_PORT'))
)

db.connect()

class BaseModel(Model):
    class Meta:
        database = db

class Prediction(BaseModel):
    id = AutoField()
    elapsed_ms = FloatField()
    model_name = CharField(max_length=255)
    created_at = DateTimeField(default=datetime.datetime.now)

class PredictionResult(BaseModel):
    prediction = ForeignKeyField(Prediction, backref='results', on_delete='CASCADE')
    name = CharField(max_length=255)
    gender = CharField(max_length=255)
    probability = FloatField()
    created_at = DateTimeField(default=datetime.datetime.now)

class PredictionResultProbability(BaseModel):
    prediction_result = ForeignKeyField(PredictionResult, backref='probabilities', on_delete='CASCADE')
    female = FloatField()
    male = FloatField()
    unisex = FloatField()
    created_at = DateTimeField(default=datetime.datetime.now)

db.create_tables([Prediction, PredictionResult, PredictionResultProbability])

app = Flask(__name__)

@app.route('/')
def index():
    return redirect('https://gendername.org')

@app.route('/models')
def get_models():
    return jsonify(list(models.keys()))

@app.route('/predict', methods=['GET'])
def predict():
    name = request.args.get('name')
    model_name = request.args.get('model')

    if not name:
        return jsonify({'error': 'Name parameter is required'}), 400

    if not model_name:
        return jsonify({'error': 'Model parameter is required'}), 400
    
    if model_name not in models:
        return jsonify({'error': 'Model not found'}), 404
    
    names = name.split(',')
    
    if len(names) > 1_000:
        return jsonify({'error': 'Just allowed 1,000 names'}), 400

    start_time = time.time()
    results = predict_gender(names, model_name)
    end_time = time.time()
    elapsed_ms = (end_time - start_time) * 1000
    
    response_results = []
    
    for result in results:
        prediction = Prediction.create(elapsed_ms=elapsed_ms, model_name=model_name)
        
        name = result['name']
        gender = result['gender']
        probability = result['probability']
        probabilities = result['probabilities']

        print(f"name: {name}, gender: {gender}, probability: {probability}, probabilities: {probabilities}")
        
        prediction_result = PredictionResult.create(
            prediction=prediction,
            name=name,
            gender=gender,
            probability=probability
        )
        
        PredictionResultProbability.create(
            prediction_result=prediction_result,
            female=probabilities['female'],
            male=probabilities['male'],
            unisex=probabilities['unisex']
        )
        
        response_results.append({
            "name": name,
            "gender": gender,
            "probability": probability,
            "probabilities": probabilities
        })
    
    return jsonify({
        'elapsed_ms': elapsed_ms,
        'model_name': model_name,
        'results': response_results
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)