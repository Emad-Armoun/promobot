export const toPascalCase = (text: string) =>
  text.replace(/\w+/g, (w) => w[0].toUpperCase() + w.slice(1).toLowerCase());
