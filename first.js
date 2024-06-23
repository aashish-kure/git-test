const name = "Learn Git!";

const printName = (name = name, times = 10) => {
  for (let i = 0; i < times; i++) {
    console.log(name, times);
  }

  return null;
};

printName(name);
