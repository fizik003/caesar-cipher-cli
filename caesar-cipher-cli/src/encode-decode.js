const decoderEncoder = (shift, str, action = "encode") => {
  if (shift < 0) {
    if (action === "encode") action = "decode";
    else action = "encode";

    shift *= -1;
  }
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
    let newSymbIndex = symbIndex + shift;

    if (newSymbIndex > alphabet.length - 1) {
      newSymbIndex = newSymbIndex % alphabet.length;
    }

    /^[A-Z]$/.test(symbol)
      ? (result += alphabet[newSymbIndex].toUpperCase())
      : (result += alphabet[newSymbIndex]);
  }

  return result;
};

let v = decoderEncoder(-3, "abc", "encode");
console.log(v);
console.log("________________--");
console.log(decoderEncoder(-3, v, "decode"));
