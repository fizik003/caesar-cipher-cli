const { pipeline } = require("stream");
const option = require("./options");
const fs = require("fs");
const { CaeserTransform } = require("./caeserTransform");
const { checkFile, checkActionShift } = require("./errors");

const options = option();

let readStream = process.stdin;
if (options.hasOwnProperty("input")) {
  checkFile(options.input);
  readStream = fs.createReadStream(options.input);
}

let writeStream = process.stdout;
if (options.hasOwnProperty("output")) {
  checkFile(options.output);
  writeStream = fs.createWriteStream(options.output, { flags: "a" });
}

checkActionShift(options.action, options.shift);

const caesarTransform = new CaeserTransform(options.action, options.shift);
pipeline(readStream, caesarTransform, writeStream, (err) => {
  if (err) {
    console.error("error:" + err.message);
  } else {
    console.log("Ok");
  }
});
