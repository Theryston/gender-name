export default function handleName(name: string): string {
  if (!name) {
    throw new Error("Please provide a name");
  }

  let newName = name.toLowerCase().trim();

  newName = newName.split(" ")[0];

  if (!newName.length) {
    throw new Error("Please provide a name");
  }

  return newName;
}
