![rainbow-ge42871377_1280](https://github.com/Theryston/gender-name/assets/72868196/136e2a71-ee91-405a-820a-5b3f26cc3c90)

# Gender Name: AI-Powered Gender Prediction

Gender Name is a powerful and sophisticated tool that employs state-of-the-art artificial intelligence techniques to accurately predict a person's gender based on their name. This versatile tool has numerous applications across various industries, including demographic analysis, marketing personalization, user experience enhancement, and social science research.

## Core Features

- Dedicated models for different cultures and languages with the default model being 'gnbr' for Brazilian names.
- User-friendly API endpoint designed for seamless integration with a wide range of platforms and applications.
- Continuously updated and refined models to maintain high performance and accuracy.
- Totally free and open source, without any kind of request limit.

## Models

You can list all available models by accessing the `/models` endpoint:

```bash
https://api.gendername.com/models
```

Current available models:

1. gn-1
    - country: 'BR'
    - type: 'human_name'
    - performance metrics: accuracy - 0.917, precision - 0.919, recall - 0.917, f1 - 0.917, loss - 0.262
2. gnbr
    - country: 'BR'
    - type: 'human_name'
    - performance metrics: accuracy - 0.848, precision - 0.866, recall - 0.848, f1 - 0.848, loss - 0.36
3. gnusa
    - huggingface: 'theryston/gnusa'
    - country: 'USA'
    - type: 'human_name'
    - performance metrics: accuracy - 0.862, precision - 0.854, recall - 0.862, f1 - 0.862, loss - 0.371

## Detailed API Usage Instructions

To make use of the Gender Name API, simply perform a GET request to the following URL, substituting `{person_name}` with the name for which you wish to predict the gender:

```bash
https://api.gendername.com/predict?name={person_name}&model={model_name}
```

Replace {model_name} with the model you wish to use for the prediction. If no model is specified, the default 'gnbr' model will be used.

## Example API Requests

Below are some examples showcasing the API's functionality:

- [https://api.gendername.com/predict?name=Theryston&model=gn-1](https://api.gendername.com/predict?name=Theryston&model=gn-1)
- [https://api.gendername.com/predict?name=João&model=gnbr](https://api.gendername.com/predict?name=João&model=gnbr)
- [https://api.gendername.com/predict?name=Mary&model=gnusa](https://api.gendername.com/predict?name=Mary&model=gnusa)

## Example API Response

The API will return a JSON object containing the predicted gender, score, and the full result with scores for both male and female categories. Here's an example of the response format:

```json
{
    "name": "theryston",
    "gender": "male",
    "score": 0.9356516003608704,
    "full_result": [
        {
            "label": "male",
            "score": 0.9356516003608704
        },
        {
            "label": "female",
            "score": 0.06434842944145203
        }
    ]
}
```

## Multilingual and Multicultural Support

Gender Name is designed to support names across various cultures and languages. We have dedicated models for different cultures and languages, each optimized for the naming conventions and gender associations of a particular country or culture. This provides high accuracy and cross-cultural applicability.

The default model is 'gnbr', optimized for Brazilian names. However, you can specify the model best suited for your needs in the API request, ensuring greater accuracy for names from different cultures.

## Seamless Integration with Diverse Platforms

The Gender Name API has been designed to ensure effortless integration with a variety of platforms and programming languages. By making a GET request to the provided API endpoint and submitting the desired name, you will receive a JSON response containing the predicted gender.

## Community Contributions and Collaboration

We actively encourage and appreciate contributions from the community to further enhance the accuracy and functionality of Gender Name. If you have any suggestions, ideas for improvements, or model refinements, please feel free to create an issue or submit a pull request on our repository. Together, we can make this tool even more powerful and effective, serving a wide range of languages and cultures.
