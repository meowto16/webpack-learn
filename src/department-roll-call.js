import Department from '@models/Department'
import Person from '@models/Person'

const MaximKirshin = new Person('Max', null)
const MaximIvanov = new Person('Max', null)
const MaximKrylov = new Person('Max', null)

const DimaLeontyev = new Person('Dima')
const DimaBasov = new Person('Dima')

const YuliaPalamarchuk = new Person('Yulia')

const ItDepartment = new Department([
  MaximKirshin,
  MaximIvanov,
  MaximKrylov,
  DimaLeontyev,
  DimaBasov,
  YuliaPalamarchuk
])

const countNameMax = ItDepartment.countPeopleByName('Max')
const countNameDima = ItDepartment.countPeopleByName('Dima')

console.log(`There are ${countNameMax} people with name Max`)
console.log(`There are ${countNameDima} people with name Dima`)
