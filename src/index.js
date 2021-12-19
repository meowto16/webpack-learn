const btn = document.getElementById('load-async-component')

function getComponent() {
  const element = document.createElement('div');

  return import('lodash').then(({ default: _ }) => {
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
  })
}

btn.onclick = () => getComponent().then(component => document.body.appendChild(component))
