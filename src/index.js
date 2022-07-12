import _ from 'lodash';
import './styles/style.css';
import Logo from './assets/logo.png';
import about from './about.js';
function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    const imgRow = document.querySelector(".imgRow");
    const LogoElem  = document.getElementById('logo');
    LogoElem.src = Logo;
    btn.innerHTML = 'Click here to get a console message!';
    btn.onclick = about;
    element.appendChild(btn);
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    const myIcon = new Image();
    myIcon.src = Logo;
    // element.appendChild(myIcon);
    element.appendChild(btn);
    // imgRow.appendChild(myIcon);
    console.log(1);

    return element;
  }
  
  document.body.appendChild(component());