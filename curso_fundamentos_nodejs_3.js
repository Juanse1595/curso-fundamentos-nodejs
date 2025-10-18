const command_line_args = process.argv.slice(2);

console.log(`This are the command line args: ${command_line_args}`);

const min = command_line_args[0] ? parseInt(command_line_args[0]) : 1;
const max = command_line_args[1] ? parseInt(command_line_args[1]) : 100;

if (isNaN(min) || isNaN(max)) {
  console.log("min or max values are not numbers");
  return;
}

if (max < min) {
  console.log("Second argument must be higher than first argument");
  return;
}

console.log(Math.floor(Math.random() * (max - min + 1)) + min);