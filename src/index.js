import _ from 'lodash'

import './style.css'

import ProgrammingIcon from './programming.png'

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const myIcon = new Image()
  myIcon.src = ProgrammingIcon
  myIcon.width = 24
  myIcon.height = 24

  document.body.insertAdjacentElement('beforeend', myIcon)

  return element;
}

document.body.appendChild(component());
