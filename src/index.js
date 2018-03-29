import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import './style.less';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    var element2 = document.createElement('p');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    element2.innerText = 'Hello LESS!';
    element2.id = 'header';

    element.appendChild(element2);
 
    return element;
  }
  
  document.body.appendChild(component());