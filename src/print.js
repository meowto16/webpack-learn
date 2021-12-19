export default function printMe() {
  console.log('I get called from print.js!');

  const fn = () => console.log('i am error')

  fn()

  console.log('hehehe')
}
