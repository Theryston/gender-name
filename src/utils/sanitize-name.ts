export default function sanitizeName(name: string): string {
  const firstName = name
    .trim()
    .split(/\s+/)[0]
    .replace(/[^a-zA-Z\u00C0-\u017F]+/g, '');

  return firstName.toLowerCase();
}
