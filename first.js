const name = "Learning Git!";
const subject = "github";

const printName = (name = name, times = 10) => {
  for (let i = 0; i < times; i++) {
    console.log(`${name} with ${subject}`, times);
  }

  console.log("Soon I'll be sixty years old! - 7 Years!");

  return undefined;
};

printName(name);
