function decoderEncoder(shift, str, action) {
  if (shift < 0) {
    if (action === "encode") action = "decode";
    else action = "encode";

    shift *= -1;
  }

  // console.log(`shif: ${shift} action: ${action} str ${str}`);
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  if (action === "decode") {
    alphabet = alphabet.reverse();
  }

  let result = "";
  for (symbol of str) {
    if (!alphabet.includes(symbol.toLowerCase())) {
      result += symbol;
      continue;
    }
    let symbIndex = alphabet.indexOf(symbol.toLowerCase());
    let newSymbIndex = symbIndex + +shift;
    // console.log(`symindex ${symbIndex} newsymbindex ${newSymbIndex}`);

    if (newSymbIndex > alphabet.length - 1) {
      newSymbIndex = newSymbIndex % alphabet.length;
    }

    /^[A-Z]$/.test(symbol)
      ? (result += alphabet[newSymbIndex].toUpperCase())
      : (result += alphabet[newSymbIndex]);
  }

  return result;
}

module.exports = { decoderEncoder };
