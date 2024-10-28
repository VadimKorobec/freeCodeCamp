function greet() {
  console.log("hello world");
}

greet();

const user = {
  name: "Pedro",
  age: 40,
  greet() {
    console.log(this);
  },
};

console.log(user["name"]);
console.log(user.age);

user.greet();
