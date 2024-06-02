from torch import nn
from encode import vocab

class GenderPredict(nn.Module):
    def __init__(self):
        super().__init__()
        self.embedding = nn.Embedding(len(vocab), 128)
        self.rnn1 = nn.LSTM(128, 128, batch_first=True)
        self.rnn2 = nn.LSTM(128, 128, batch_first=True)
        self.dropout = nn.Dropout(0.5)
        self.fc1 = nn.Linear(128, 64)
        self.batch_norm1 = nn.BatchNorm1d(64)
        self.fc2 = nn.Linear(64, 3)
        self.relu = nn.ReLU()

    def forward(self, x):
        x = self.embedding(x)
        x, _ = self.rnn1(x)
        x, _ = self.rnn2(x)
        x = self.dropout(x[:, -1, :])
        x = self.fc1(x)
        x = self.batch_norm1(x)
        x = self.relu(x)
        x = self.fc2(x)
        return x