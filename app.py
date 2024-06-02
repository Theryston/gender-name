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
    
    if model_name not in models:
        return jsonify({'error': 'Model not found'}), 404
    
    names = name.split(',')
    
    if len(names) > 1_000:
        return jsonify({'error': 'Just allowed 1,000 names'}), 400

    start_time = time.time()
    results = predict_gender(names, model_name)
    end_time = time.time()
    elapsed_ms = (end_time - start_time) * 1000

    return jsonify({
        'elapsed_ms': elapsed_ms,
        'model_name': model_name,
        'results': results
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
