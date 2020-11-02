import _ from 'lodash';
import './styles/reset.css';
import './sass/main.scss';


function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());

const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        if (scrollPos > 10) {
            header.classList.add('scrolled')
        } else {
            header.classList.remove('scrolled')
        }
    })

    //Mini Menu close  
    function handleNavClick() {
        const navbar = document.querySelector('#menu-btn');
        if (navbar.checked === true) {
            this.onclick = closekNavbar;
            
        }else {
            console.log('no esta activo el mini menu')
            return
        }
    } 

    function closekNavbar() {
        const navbar = document.querySelector('#menu-btn')
        if (navbar.checked !== null) {
            navbar.checked = !navbar.checked
            console.log(navbar.checked)
        } 
        
    }

    