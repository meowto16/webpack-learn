class Person {
  constructor(name, speciality) {
    this.name = name
    this.speciality = speciality
  }

  describeYourself() {
    return `My name is ${this.name}. My speciality is ${this.speciality.getFullDescription()}`
  }
}

export default Person
