from model import GenderClassifier
from contants import input_dim, embedding_dim, hidden_dim
import torch

model_gnbr = GenderClassifier(input_dim, embedding_dim, hidden_dim)
model_gnbr.load_state_dict(torch.load('trained/gnbr.pth'))
model_gnbr.eval()

model_gnusa = GenderClassifier(input_dim, embedding_dim, hidden_dim)
model_gnusa.load_state_dict(torch.load('trained/gnusa.pth'))
model_gnusa.eval()

models = {
    'gnbr': model_gnbr,
    'gnusa': model_gnusa
}