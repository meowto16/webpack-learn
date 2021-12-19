class Department {
  constructor(people) {
    this.people = people
  }

  countPeopleByName(name) {
    return this.people.filter(person => person.name.toLowerCase() === name.toLowerCase()).length
  }

  countPeopleBySpeciality(speciality) {
    return this.people.filter(person => person.speciality.name.toLowerCase() === speciality.toLowerCase()).length
  }
}

export default Department
