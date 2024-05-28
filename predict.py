from encode_name import encode_name
from sklearn.preprocessing import LabelEncoder
import torch
import numpy as np
from models import models

def predict_gender(name, model_name):
    model = models[model_name]

    le = LabelEncoder();
    le.fit(['male', 'female', 'unisex']);

    with torch.no_grad():
        encoded_name = torch.tensor([encode_name(name)], dtype=torch.long)
        output = model(encoded_name)
        probabilities = output[0].numpy()
        predicted_gender = le.inverse_transform([np.argmax(probabilities)])[0]
        probabilities_with_names = {k: float(v) for k, v in dict(zip(le.classes_, probabilities)).items()}
        probability = probabilities_with_names[predicted_gender]        

        return {
            'gender': predicted_gender,
            'probability': probability,
            'model_name': model_name,
            'name': name,
            'probabilities': probabilities_with_names,
        }
