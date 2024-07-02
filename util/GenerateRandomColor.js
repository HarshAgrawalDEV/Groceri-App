export function generateRandomHexColor(length) {
  let hexColor = "";

  // Loop to generate each character of the hex color code
  for (let i = 0; i < length; i++) {
    // Generate a random number between 0 and 15 (inclusive)
    const randomNum = Math.floor(Math.random() * 16);

    // Convert the random number to its hexadecimal representation
    const hexDigit = randomNum.toString(16);

    // Append the hexadecimal digit to the color code
    hexColor += hexDigit;
  }

  return hexColor;
}
