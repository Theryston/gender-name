from flask import Flask, request, jsonify, redirect
from predict import predict_gender
import time
from models import models

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

    start_time = time.time()
    result = predict_gender(name, model_name)
    end_time = time.time()
    elapsed_ms = (end_time - start_time) * 1000

    return jsonify({
        'gender': result['gender'],
        'probability': result['probability'],
        'name': result['name'],
        'model_name': result['model_name'],
        'elapsed_ms': elapsed_ms,
        'probabilities': result['probabilities'],
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
