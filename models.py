from model import GenderPredict
import torch

gnbr = GenderPredict()
gnbr.load_state_dict(torch.load("trained/gnbr.pth"))

gnusa = GenderPredict()
gnusa.load_state_dict(torch.load("trained/gnusa.pth"))

models = {
    "gnbr": gnbr,
    "gnusa": gnusa
}