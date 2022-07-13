import _ from 'lodash';
import './styles/style.css';
import './styles/about.css';
import './styles/menu.css';
import Logo from './assets/logo.png';
import brownie from './assets/brownie.jpg';
import hall from './assets/hall.jpg';
import martini from './assets/martini.jpg';
import pizza from './assets/pizza.jpg';
import salad from './assets/salad.jpg';
import green from './assets/green.jpg';
import awardBronze from './assets/bronzeaward.jpg';
import awardStar from './assets/staraward.jpg';
import awardLiving from './assets/livingaward.png';
import tapasShowcaseImg from './assets/showcaseTapas.jpg'
import cocktailShowcaseImg from './assets/showcase-drink.jpg'
import pizzaShowcaseImg from './assets/showcasePizza.jpg'
import bigLogo from './assets/logoBig.png';
import parkingPicture from './assets/parkingLarge.png'
import fbIcon from './assets/facebook.png';
import facilities from './assets/facilities.png';
import suppliers from './assets/suppliers.svg'
import igIcon from './assets/instagram.png';
import about from './about.js';
import menu from './menu.js';
import home from './home.js';

let documentState = "home";

const aboutAssets = {
  parking: parkingPicture,
}

home(brownie,hall,martini,pizza,salad,green,awardBronze,awardStar,awardLiving,tapasShowcaseImg,cocktailShowcaseImg,pizzaShowcaseImg);
function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    const imgRow = document.querySelector(".imgRow");
    const LogoElem  = document.getElementById('logo');
    const footerLogo = document.getElementById('footerLogo');
    footerLogo.src = bigLogo;
    const facebookBtn = document.getElementById("fbLogo");
    const instagramBtn = document.getElementById("igLogo");
    LogoElem.src = Logo;
    facebookBtn.src = fbIcon;
    instagramBtn.src = igIcon;
    btn.innerHTML = 'Click here to get a console message!';
    btn.onclick = about;
    return element;
  }
  document.body.appendChild(component());
  const homeBtn = document.getElementById("home");
  homeBtn.addEventListener("click",event => {
    home(brownie,hall,martini,pizza,salad,green,awardBronze,awardStar,awardLiving,tapasShowcaseImg,cocktailShowcaseImg,pizzaShowcaseImg);
  })
  const menuBtn = document.getElementById("menu");
  menuBtn.addEventListener("click",event => {
    menu(suppliers);
  })
  const aboutBtn = document.getElementById("about");
  aboutBtn.addEventListener("click",event => {
    about(parkingPicture,facilities);
  })
  

