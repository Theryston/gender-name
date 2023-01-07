import * as brain from "brain.js";

export default function handleNet(model: any) {
  if (!model) {
    throw new Error("Please provide a valid model");
  }

  if (typeof model !== "object") {
    throw new Error("Please provide a valid model");
  }

  try {
    const net = new brain.recurrent.LSTM();
    net.fromJSON(model);

    return net;
  } catch (error) {
    throw new Error("Please provide a valid model");
  }
}
