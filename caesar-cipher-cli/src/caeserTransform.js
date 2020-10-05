const { Transform } = require("stream");
const { StringDecoder } = require("string_decoder");
const { decoderEncoder } = require("./encode-decode");

class CaeserTransform extends Transform {
  constructor(action, shift) {
    super(action, shift);
    this.action = action;
    this.shift = shift;
    this._decoder = new StringDecoder("utf-8");
  }

  _transform(chunk, encoding, callBack) {
    if (encoding === "buffer") {
      chunk = this._decoder.write(chunk);
    }

    if (chunk === "\u0003") {
      process.exit();
    }

    chunk = decoderEncoder(this.shift, chunk, this.action) + "\n";

    callBack(null, chunk);
  }
}

module.exports = { CaeserTransform };
