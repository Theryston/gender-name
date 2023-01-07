# Gender Name Brazil 100

Model trained to tell the gender of a Brazilian person by name, this model was only trained with 100 names, which means it may not be reliable for all cases

Recommendation: just for testing

## How To Use

To use this model, the process is very simple, just install it and the gender name. To do this, run the command below:

```bash
yarn add @gender-name/brazil_100 gender-name
```

After that you can already use it as a model in the gender-name like this:

```ts
import genderName from "gender-name";
import brazil_100_model from "@gender-name/brazil_100";

const result = await genderName("Maria", { model: brazil_100_model });

console.log(result); // female
```
