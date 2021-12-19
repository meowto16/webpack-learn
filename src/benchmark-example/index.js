import Speciality from './models/Speciality'
import Person from './models/Person'

import personsCsv from './persons.csv'
import specialitiesCsv from './specialities.csv'

const Benchmark = require('benchmark')

const suite = new Benchmark.Suite

suite
  .add('Using inverse', function() {
    const persons = specialitiesCsv.reduce((acc, speciality) => {
      const persons = personsCsv
        .filter(person => person.speciality.toLowerCase() === speciality.name.toLowerCase())
        .map(person => new Person(person.name, new Speciality(speciality.name, speciality.description)))

      if (persons.length) acc.push(...persons)
      return acc
    }, [])

    const greetings = persons.map(person => person.describeYourself())
  })
  .add('Using group by char', function() {
    const specialitiesGroupedByChar = specialitiesCsv.reduce((acc, spec) => {
      const char = spec.name[0].toLowerCase()
      if (!acc[char]) acc[char] = []
      acc[char].push(spec)

      return acc
    }, {})

    const persons = personsCsv.map((person) => new Person(person.name, (() => {
      const char = person.speciality[0].toLowerCase()
      const group = specialitiesGroupedByChar[char] || []
      const speciality = group.find(spec => person.speciality.toLowerCase() === spec.name.toLowerCase())

      return speciality ? new Speciality(speciality.name, speciality.desc) : null
    })()))
    const greetings = persons.map(person => person.describeYourself())
  })
  .add('Using just find', function() {
    const getSpeciality = (speciality) => {
      const spec = specialitiesCsv.find(specCsv => specCsv.name.toLowerCase() === speciality.toLowerCase())
      return spec ? new Speciality(spec.name, spec.description) : null
    }

    const persons = personsCsv.map((person) => new Person(person.name, getSpeciality(person.speciality)))
    const greetings = persons.map(person => person.describeYourself())
  })
  .add('Using map', function () {
  const specialities = new Map()
  specialitiesCsv.forEach(spec => specialities.set(spec.name.toLowerCase(), new Speciality(spec.name, spec.description)))

  const persons = personsCsv.map((person) => new Person(person.name, specialities.get(person.speciality.toLowerCase())))
  const greetings = persons.map(person => person.describeYourself())
})
  .add('Using object', function () {
    const specialities = {}
    specialitiesCsv.forEach(spec => specialities[spec.name.toLowerCase()] = new Speciality(spec.name, spec.description))

    const persons = personsCsv.map((person) => new Person(person.name, specialities[person.speciality.toLowerCase()]))
    const greetings = persons.map(person => person.describeYourself())
  })
  // add listeners
  .on('error', function ({ target: { error } }) {
    console.error(error)
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({async: true})


