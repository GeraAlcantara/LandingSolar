/******/ (() => { // webpackBootstrap
/*!*************************************!*\
  !*** ./src/components/functions.js ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
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

    console.log('I get called from functions.js! again!!! nowwww');


    /* function check(checked = true) {
        const cbs = document.querySelectorAll('input[name="color"]');
        cbs.forEach((cb) => {
            cb.checked = checked;
        });
    }
    
    function handleNavClick(e) {
        const navLink = document.querySelectorAll('.nav-links')
        
    } 
    
    function closeNav() {
        check(false);
        // reassign click event handler
        this.onclick = handleNavClick;
    } */
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYW5kaW5nc29sYXIvLi9zcmMvY29tcG9uZW50cy9mdW5jdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBLEs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEciLCJmaWxlIjoianMvYXBwLmJ1bmRsZS41Y2Q1ZWYxMWJkOWE0OTA5MTU2Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWhlYWRlcicpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICBjb25zdCBzY3JvbGxQb3MgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgICAgICBpZiAoc2Nyb2xsUG9zID4gMTApIHtcclxuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGVkJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsZWQnKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgLy9NaW5pIE1lbnUgY2xvc2UgIFxyXG4gICAgZnVuY3Rpb24gaGFuZGxlTmF2Q2xpY2soKSB7XHJcbiAgICAgICAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtYnRuJyk7XHJcbiAgICAgICAgaWYgKG5hdmJhci5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25jbGljayA9IGNsb3Nla05hdmJhcjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gZXN0YSBhY3Rpdm8gZWwgbWluaSBtZW51JylcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZWtOYXZiYXIoKSB7XHJcbiAgICAgICAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtYnRuJylcclxuICAgICAgICBpZiAobmF2YmFyLmNoZWNrZWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgbmF2YmFyLmNoZWNrZWQgPSAhbmF2YmFyLmNoZWNrZWRcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobmF2YmFyLmNoZWNrZWQpXHJcbiAgICAgICAgfSBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZygnSSBnZXQgY2FsbGVkIGZyb20gZnVuY3Rpb25zLmpzISBhZ2FpbiEhISBub3d3d3cnKTtcclxuXHJcblxyXG4gICAgLyogZnVuY3Rpb24gY2hlY2soY2hlY2tlZCA9IHRydWUpIHtcclxuICAgICAgICBjb25zdCBjYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwiY29sb3JcIl0nKTtcclxuICAgICAgICBjYnMuZm9yRWFjaCgoY2IpID0+IHtcclxuICAgICAgICAgICAgY2IuY2hlY2tlZCA9IGNoZWNrZWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGhhbmRsZU5hdkNsaWNrKGUpIHtcclxuICAgICAgICBjb25zdCBuYXZMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1saW5rcycpXHJcbiAgICAgICAgXHJcbiAgICB9IFxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBjbG9zZU5hdigpIHtcclxuICAgICAgICBjaGVjayhmYWxzZSk7XHJcbiAgICAgICAgLy8gcmVhc3NpZ24gY2xpY2sgZXZlbnQgaGFuZGxlclxyXG4gICAgICAgIHRoaXMub25jbGljayA9IGhhbmRsZU5hdkNsaWNrO1xyXG4gICAgfSAqLyJdLCJzb3VyY2VSb290IjoiIn0=