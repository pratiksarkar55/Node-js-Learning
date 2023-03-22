class Person{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  getDetails(){
    console.log(`My name is ${this.name} and age is ${this.age}`);
  }
}

module.exports = Person;