const fs = require("fs");

function checkAction(action) {
  if (action) {
    if (action === "encode" || action === "decode") {
      return;
    }
  }
  console.error('error: action must be "encode" or "decode"');
  process.exit(1);
}

function checkShift(shift) {
  if (shift) {
    if (Number.isInteger(+shift)) {
      // console.log(`shift ${shift} is good`);
      return;
    }
  }
  console.error("error: shift must be integer number");
  process.exit(1);
}

function checkActionShift(action, shift) {
  checkAction(action);
  checkShift(shift);
}

function checkFile(file) {
  try {
    fs.accessSync(file, fs.constants.F_OK);
  } catch (err) {
    console.error(`error: file '${file}' does not exist`);
    process.exit(1);
  }

  try {
    fs.accessSync(file, fs.constants.R_OK);
  } catch (err) {
    console.error("error: file is not read");
    process.exit(1);
  }

  try {
    fs.accessSync(file, fs.constants.W_OK);
  } catch (err) {
    console.error("error: file is not write");
    process.exit(1);
  }
}

module.exports = { checkActionShift, checkFile };
