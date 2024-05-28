import torch
import torch.nn as nn
from contants import max_len, output_dim

class GenderClassifier(nn.Module):
    def __init__(self, input_dim, embedding_dim, hidden_dim):
        super(GenderClassifier, self).__init__()
        self.embedding = nn.Embedding(input_dim, embedding_dim, padding_idx=0)
        self.fc1 = nn.Linear(embedding_dim * max_len, hidden_dim)
        self.fc2 = nn.Linear(hidden_dim, output_dim)
        self.softmax = nn.Softmax(dim=1)

    def forward(self, x):
        x = self.embedding(x)
        x = x.view(x.size(0), -1)
        x = torch.relu(self.fc1(x))
        x = self.fc2(x)
        return self.softmax(x)