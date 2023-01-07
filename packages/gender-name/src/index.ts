import { Options } from "./types/Options";
import handleName from "./utils/handleName";
import handleNet from "./utils/handleNet";

async function genderName(name: string, options: Options) {
  const newName = handleName(name);
  const net = handleNet(options.model);

  const result = net.run(newName);
  return result;
}

export default genderName;
