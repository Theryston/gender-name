from unidecode import unidecode
from contants import max_len

def encode_name(name):
    name = unidecode(name.lower())
    name = name[:max_len]
    encoded = [ord(c) - ord('a') + 1 for c in name if 'a' <= c <= 'z'];
    if len(encoded) < max_len:
        encoded += [0] * (max_len - len(encoded))

    return encoded