![rainbow-ge42871377_1280](https://github.com/Theryston/gender-name/assets/72868196/136e2a71-ee91-405a-820a-5b3f26cc3c90)

# Gender Name: AI-Powered Gender Prediction

Gender Name is a powerful and sophisticated tool that employs state-of-the-art artificial intelligence techniques to accurately predict a person's gender based on their name. This versatile tool has numerous applications across various industries, including demographic analysis, marketing personalization, user experience enhancement, and social science research.

## Core Features

- Currently optimized for Brazilian names, with plans to expand to support multiple languages through dedicated templates for each country.
- User-friendly API endpoint designed for seamless integration with a wide range of platforms and applications
- Model hosted on the popular Hugging Face platform for direct access and usage: [https://huggingface.co/theryston/gender-name](https://huggingface.co/theryston/gender-name)
- Continuously updated and refined model to maintain high performance and accuracy
- Totally free and open source, without any kind of request limit

## Detailed API Usage Instructions

To make use of the Gender Name API, simply perform a GET request to the following URL, substituting `{person_name}` with the name for which you wish to predict the gender:

```bash
https://api.gendername.com/predict?name={person_name}
```

## Example API Requests

Below are some examples showcasing the API's functionality:

- [https://api.gendername.com/predict?name=Theryston](https://api.gendername.com/predict?name=Theryston)
- [https://api.gendername.com/predict?name=João](https://api.gendername.com/predict?name=João)
- [https://api.gendername.com/predict?name=Maria](https://api.gendername.com/predict?name=Maria)

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

## Future Expansion to Multiple Languages

While the Gender Name is currently optimized for Brazilian names, we are actively working on expanding the model to support multiple languages and countries. In the near future, users will be able to access dedicated templates for each country or language, providing even greater accuracy and cross-cultural applicability.

## Accessing the Model through Hugging Face

In addition to the API, the Gender Name model is also hosted on the widely recognized Hugging Face platform. You can access and utilize the model directly via the following link: [https://huggingface.co/theryston/gender-name](https://huggingface.co/theryston/gender-name)

## Seamless Integration with Diverse Platforms

The Gender Name API has been designed to ensure effortless integration with a variety of platforms and programming languages. By making a GET request to the provided API endpoint and submitting the desired name, you will receive a JSON response containing the predicted gender.

## Community Contributions and Collaboration

We actively encourage and appreciate contributions from the community to further enhance the accuracy and functionality of Gender Name. If you have any suggestions, ideas for improvements, or model refinements, please feel free to create an issue or submit a pull request on our repository. Together, we can make this tool even more powerful and effective, serving a wide range of languages and cultures.
