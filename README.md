![rainbow-ge42871377_1280](https://github.com/Theryston/gender-name/assets/72868196/136e2a71-ee91-405a-820a-5b3f26cc3c90)

# Gender Name: AI-Powered Gender Prediction

Gender Name is a powerful and sophisticated tool that employs state-of-the-art artificial intelligence techniques to accurately predict a person's gender based on their name. This versatile tool has numerous applications across various industries, including demographic analysis, marketing personalization, user experience enhancement, and social science research.

## Core Features

- Dedicated models for different cultures and languages with the default model being 'gnbr' for Brazilian names.
- User-friendly API endpoint designed for seamless integration with a wide range of platforms and applications.
- Continuously updated and refined models to maintain high performance and accuracy.
- Totally free and open source.

## Models

You can list all available models by accessing the `GET /models` endpoint:

```bash
GET https://api.gendername.com/models
```

## Detailed API Usage Instructions

To use the Gender Name API it is very simple, just make a request to `POST /predict` passing the `name` and `model` in the body, below is the more detailed request:

**Endpoint:**

```bash
POST https://api.gendername.com/predict
```

**Body:**

```json
{
    "name": "{person_name}",
    "model": "{model_name}"
}
```

- Replace `{person_name}` with the name of the person you want to predict. If you pass first and last name, the API only predict for the first name
- Replace `{model_name}` with the model you wish to use for the prediction. If no model is specified, the default 'gnbr' model will be used.

**Response Example:**

```json
{
    "_id": "6557a4b5f2eedede4545c022",
    "raw_name": "Theryston",
    "name": "theryston",
    "model_id": "65579eddfa5bac81987275fd",
    "gender": "male",
    "score": 0.9074452519416809,
    "full_result": [
        {
            "label": "male",
            "score": 0.9074452519416809
        },
        {
            "label": "female",
            "score": 0.09255477786064148
        }
    ],
    "ip": "127.0.0.1",
    "created_at": "2023-11-17T17:36:53.551Z",
    "updated_at": "2023-11-17T17:36:53.551Z"
}
```

## Cloning

The repository contains the trained models, this means that the clone may take a little longer and the project may weigh more due to the models. Remember to have [LFS](https://git-lfs.com/) installed before running the clone.

Full command (install LFS and clone):

```bash
git lfs install
git clone https://github.com/Theryston/gender-name.git
```

## Request Limit

The Gender Name API has a limit of 100 requests per hour per IP, which equates to 2,400 requests per day, twice as many as most APIs that predict gender.

If this limit isn't enough for you, consider running the model through Replicate, where our models are hosted.

The process is very simple: in the model search route `GET /models` open the link called `replicate_public_url` of the chosen model, this will take you to the public page of the model in Replicate, then click on "API" and you will see the instructions for running the model directly in your Replicate account, where there is no limit, but there are costs for the Replicate servers where the model is running.

Remember: this cost is not our responsibility, it is solely the responsibility of the server at Replicate, as when running directly there you will be “hosting” the models yourself.

## API Latency

The average latency of each prediction is 1 second, but as the models are running in Replicate, sometimes Replicate can leave the model cold, this causes some requests to last a little longer, or even have a timeout in the request, this duration is the time required for Replicate to load the models again. So remember to prepare your API to try again if there is a timeout, even though this is not very frequent for models like gnbr.

## Multilingual and Multicultural Support

Gender Name is designed to support names across various cultures and languages. We have dedicated models for different cultures and languages, each optimized for the naming conventions and gender associations of a particular country or culture. This provides high accuracy and cross-cultural applicability.

The default model is 'gnbr', optimized for Brazilian names. However, you can specify the model best suited for your needs in the API request, ensuring greater accuracy for names from different cultures.

## Seamless Integration with Diverse Platforms

The Gender Name API has been designed to ensure effortless integration with a variety of platforms and programming languages. By making a POST request to the provided API endpoint and submitting the desired name, you will receive a JSON response containing the predicted gender.

## Community Contributions and Collaboration

We actively encourage and appreciate contributions from the community to further enhance the accuracy and functionality of Gender Name. If you have any suggestions, ideas for improvements, or model refinements, please feel free to create an issue or submit a pull request on our repository. Together, we can make this tool even more powerful and effective, serving a wide range of languages and cultures.
