from cog import BasePredictor, Input
from transformers import AutoModelForSequenceClassification, AutoTokenizer


class Predictor(BasePredictor):
    def setup(self) -> None: 
        self.model = AutoModelForSequenceClassification.from_pretrained(".")
        self.tokenizer = AutoTokenizer.from_pretrained(".")

    def predict(
        self,
        name: str = Input(description="The name of a person from USA")
    ) -> dict[str, float]:
        inputs = self.tokenizer(name, return_tensors="pt")
        outputs = self.model(**inputs)
        logits = outputs.logits

        probabilities = logits.softmax(dim=1)

        probabilities_arr = probabilities.detach().numpy()

        female,male = probabilities_arr[0]

        return {
            "female": female,
            "male": male
        }


