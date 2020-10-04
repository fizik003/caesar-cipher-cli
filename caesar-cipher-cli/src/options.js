const options = () => {
  const { program } = require("commander");

  program.storeOptionsAsProperties(false);

  program
    .requiredOption("-a, --action <type>", "decode or encode")
    .requiredOption("-s, --shift <number>", "shift")
    .option("-i, --input <inputFile>", "input file path")
    .option("-o, --output <outputFile>", "output file path");

  program.parse(process.argv);

  return program.opts();
};

module.exports = options;
