import Speciality from '@models/Speciality'
import Person from '@models/Person'

const Teacher = new Speciality('Teacher', 'a person who teaches')
const Engineer = new Speciality('Engineer', 'a person who build some nerdy things')
const Doctor = new Speciality('Doctor', 'a person who heal ill people')

const Max = new Person('Max', Teacher)
const Bobby = new Person('Bobby', Engineer)
const Lamy = new Person('Lamy', Doctor)

const people = [Max, Bobby, Lamy]
people.forEach(person => {
  const description = person.describeYourself()
  console.log(description)
})
