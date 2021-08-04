/*!
* Start Bootstrap - Freelancer v7.0.2 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        
        
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
           navbarCollapsible.classList.remove('navbar-shrink');
            if(window.innerWidth < 991)
                navbarCollapsible.classList.remove('bg-seven');
        } else {
            navbarCollapsible.classList.remove('bg-transparent');
            navbarCollapsible.classList.add('navbar-shrink');
            if(window.innerWidth < 991)
                navbarCollapsible.classList.add('bg-seven');
        }

    };
        
    // Hide all elements by classes
    var hideElementsByClass = function(classname){
    
        var elements = document.querySelectorAll('.'+classname);
        
        elements.forEach(function(el){
            el.style.display="none";
        } );  
    }

    // Make visible all elements by classes
    var showElementsByClass = function(classname){
    
        var elements = document.querySelectorAll('.'+classname);
        
        elements.forEach(function(el){
            el.style.display="";
        } );  
    }

    function topFunction() {
        //document.body.scrollTop = 0;  For Safari
        if(window.scrollY !== 0) {
            // For Chrome, Firefox, IE and Opera
            document.documentElement.scrollTop = 0;
        }
    }

    //add margin to specific element
    function addMarginToId(){
        if(window.innerWidth < 991){
            const aboutElement = document.body.querySelector('#col-inf');
            aboutElement.classList.add('mb-3');
        }
    }


    //Check screen resize and hide or display the element
    window.onresize = function checkWindowSize(){
        if (window.innerWidth < 768){
            hideElementsByClass('date1');
        }
        else if(window.innerWidth > 768)
            showElementsByClass('date1');
    }

    //Check screen size onload and hide and display element
    window.onload = function checkWindowSizeAndScrollTop(){
        topFunction();
        addMarginToId();
        if (window.innerWidth < 768)
            hideElementsByClass('date1');
        else if(window.innerWidth > 768)
            showElementsByClass('date1');
    }


    
    


    // Shrink the navbar 
    //navbarShrink();

    

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    
    };
    // Collapse responsive navbar when toggler is visible
    
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
    

});
