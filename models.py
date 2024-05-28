from model import GenderClassifier
from contants import input_dim, embedding_dim, hidden_dim
import torch

model_gnbr = GenderClassifier(input_dim, embedding_dim, hidden_dim)
model_gnbr.load_state_dict(torch.load('trained/gnbr.pth'))
model_gnbr.eval()

models = {
    'gnbr': model_gnbr,
}