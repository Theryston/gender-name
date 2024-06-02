from encode import encode_name
import torch
from encode import get_label_from_tensor
from models import models

def predict_gender(names, model_name):
    model = models[model_name]
    model.eval()
    encoded_names = [encode_name(name) for name in names]
    encoded_names = torch.stack(encoded_names)
    encoded_names = encoded_names.squeeze(1)

    with torch.no_grad():
        y_logics = model(encoded_names)
        y_preds = torch.softmax(y_logics, dim=1)
        results = [];
        for i in range(len(names)):
            y_pred = y_preds[i]
            labels = get_label_from_tensor(y_pred)
            results.append({
                "gender": labels["label"],
                "probability": y_pred[labels["biggest_index"]].item(),
                "name": names[i],
                "probabilities": {
                    "male": labels["male"].item(),
                    "female": labels["female"].item(),
                    "unisex": labels["unisex"].item()
                }
            })

    return results