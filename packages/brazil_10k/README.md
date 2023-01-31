# Gender Name Brazil 10k

Artificial intelligence model created with more than 10,000 Brazilian names to predict a person's gender based on their name made for gender-name

## How To Use

To use this model, the process is very simple, just install it and the gender name. To do this, run the command below:

```bash
yarn add @gender-name/brazil_10k gender-name
```

After that you can already use it as a model in the gender-name like this:

```ts
import genderName from "gender-name";
import brazil_10k_model from "@gender-name/brazil_10k";

const result = await genderName("Maria", { model: brazil_10k_model });

console.log(result); // female
```
