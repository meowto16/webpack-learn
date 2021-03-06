import _ from 'lodash';
import Print from './print';

import './index.css'

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.onclick = Print.bind(null, 'Hello webpack!');
  console.log('hello')

  return element;
}

document.body.appendChild(component());
