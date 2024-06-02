import pickle
import torch
from unidecode import unidecode

with open('trained/vocab.pkl', 'rb') as f:
    vocab = pickle.load(f)

def encode_name(name):
    name = name.lower()
    name = unidecode(name)
    encoded = [vocab[char] for char in name]

    if len(encoded) > 10:
        encoded = encoded[:10]

    elif len(encoded) < 10:
        encoded += [0] * (10 - len(encoded))

    return torch.tensor(encoded)

def label_tensor(label):
    tensor = None

    if label == "male":
        tensor = torch.tensor([1.0, 0.0, 0.0])
    elif label == "female":
        tensor = torch.tensor([0.0, 1.0, 0.0])
    else:
        tensor = torch.tensor([0.0, 0.0, 1.0])
        
    return tensor

def get_label_from_tensor(tensor):
    biggest_index = torch.argmax(tensor).item()
    return {
        "biggest_index": biggest_index,
        "label": "male" if biggest_index == 0 else "female" if biggest_index == 1 else "unisex",
        "male": tensor[0],
        "female": tensor[1],
        "unisex": tensor[2],
    }