# Gender Name

A very simple package, but using high level artificial intelligence to predict a person's gender based on their name, this package accepts several pre-trained models that are offered by other packages

## How To Use

Using the gender name is very simple, for the first step you need to install the package:

```bash
yarn add gender-name
```

For it to work correctly you need a model, you can check the [list of models here](#list-of-models) in this example we will use the default model for testing:

```bash
yarn add @gender-name/brazil_100
```

Now you can preview genres by passing a name and the model you downloaded earlier:

```ts
import genderName from "gender-name";
import brazil_100_model from "@gender-name/brazil_100";

const result = await genderName("Maria", { model: brazil_100_model });

console.log(result); // female
```

## List of Models

- [brazil_100](https://github.com/Theryston/gender-name/tree/main/packages/brazil_100) - just for testing
