// menangkap class hovered di console
const list = document.querySelectorAll(".navigation li");
function activelink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activelink));

// menu toggle //
const toggleNavigation = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");
const main = document.querySelector(".content");
// ketika meu di klik aktifkan class active
toggleNavigation.addEventListener("click", () => {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
});

const moon = () => {
  const moon = document.querySelector(".mon");
  moon.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");
  });
};
moon();

// membuat objek dan class dengan Es6
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

// Membuat instance dari Person
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

console.log(person1.name); // Output: Alice
console.log(person2.name); // Output: Bob

person1.eat(); // Output: Alice is eating



