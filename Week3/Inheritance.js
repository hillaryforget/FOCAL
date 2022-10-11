// This class represents all that is common between Student and Mentor
class Person {
  
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }

  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
}

class Student extends Person {
  enroll(cohort) {
    this.cohort = cohort;
  }
}
const hillary = new Student("Hillary Forget", "whips kitties") 
hillary.enroll("2022 Flex Program")


class Mentor extends Person {
  goOnShift() {
    this.onShift = true;
  }

  goOffShift() {
    this.onShift = false;
  }
}
const chetna = new Mentor("Ward 6 Councillor", "has superpowers")
chetna.goOnShift()
chetna.goOffShift()
console.log(chetna.bio())