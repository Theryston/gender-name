![rainbow-ge42871377_1280](https://github.com/Theryston/gender-name/assets/72868196/136e2a71-ee91-405a-820a-5b3f26cc3c90)

# Gender Name: AI-Powered Gender Prediction

Gender Name is a powerful and sophisticated tool that employs state-of-the-art artificial intelligence techniques to accurately predict a person's gender based on their name. This versatile tool has numerous applications across various industries, including demographic analysis, marketing personalization, user experience enhancement, and social science research.

## Core Features

- Dedicated models for different cultures and languages.
- User-friendly API endpoint designed for seamless integration with a wide range of platforms and applications.
- Continuously updated and refined models to maintain high performance and accuracy.
- Totally free, open source and without request limits

## Examples

- [Predict USA gender based on John Doe name](https://api.gendername.org/predict?name=John+Doe&model=gnusa)
- [Predict BR gender based on Theryston name](https://api.gendername.org/predict?name=Theryston&model=gnbr)

## Available Models

| Model | Country | Description                                   |
| ----- | ------- | --------------------------------------------- |
| gnbr  | Brazil  | Predict gender by names of humans from Brazil |
| gnusa | USA     | Predict gender by names of humans from USA    |

## Multilingual and Multicultural Support

Gender Name is designed to support names across various cultures and languages. We have dedicated models for different cultures and languages, each optimized for the naming conventions and gender associations of a particular country or culture. This provides high accuracy and cross-cultural applicability.

## Seamless Integration with Diverse Platforms

The Gender Name API has been designed to ensure effortless integration with a variety of platforms and programming languages. By making a GET request to the provided API endpoint and submitting the desired name, you will receive a JSON response containing the predicted gender.

## Community Contributions and Collaboration

We actively encourage and appreciate contributions from the community to further enhance the accuracy and functionality of Gender Name. If you have any suggestions, ideas for improvements, or model refinements, please feel free to create an issue or submit a pull request on our repository. Together, we can make this tool even more powerful and effective, serving a wide range of languages and cultures.

## Models

You can list all available models by accessing the `GET /models` endpoint:

```bash
GET https://api.gendername.org/models
```

## Detailed API Usage Instructions

To use the Gender Name API it is very simple, just make a request to `GET /predict` passing the `name` and `model` in the query params, below is the more detailed request:

**Endpoint:**

```bash
GET https://api.gendername.org/predict?name={person_name}&model={model_name}
```

- Replace `{person_name}` with the name of the person you want to predict (can be up to 1000 names if you split it by comma, like: `{person_name1},{person_name2}`).
- Replace `{model_name}` with the model you wish to use for the prediction.

**Response Example:**

```json
{
  "elapsed_ms": 2.2819042205810547,
  "model_name": "gnbr",
  "results": [
    {
      "gender": "male",
      "name": "joão",
      "probability": 0.9888328313827515,
      "probabilities": {
        "female": 0.0000666277264826931,
        "male": 0.9888328313827515,
        "unisex": 0.011100534349679947
      }
    }
  ]
}
```

## License

The Gender Name API are licensed under the MIT license!
