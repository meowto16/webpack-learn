class Speciality {
  constructor(name, description) {
    this.name = name
    this.description = description
  }

  getFullDescription() {
    return `${this.name}, ${this.description}`
  }
}

export default Speciality
