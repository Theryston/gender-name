from flask import Flask, request, jsonify
from predict import predict_gender
import time
from models import models

app = Flask(__name__)

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
    gender, probabilities = predict_gender(name, model_name)
    end_time = time.time()
    elapsed_ms = (end_time - start_time) * 1000

    response = {
        'gender': gender,
        'elapsed_ms': elapsed_ms,
        'probabilities': probabilities,
    }

    return jsonify(response)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
