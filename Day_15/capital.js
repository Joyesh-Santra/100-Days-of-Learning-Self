function lastLetter(str) {
  if (typeof str !== "string" || str.length === 0) {
    return undefined; // Or throw an error, depending on desired behavior for invalid input
  }
  return str[str.length - 1];
}
