var burger = document.getElementById('burger-menu');
var navLinks = document.querySelectorAll('.hero__navigation-responsive__li a');
burger.addEventListener('click', responsiveNavigation);

function responsiveNavigation() {
  burger.classList.toggle('animation');
  document.getElementById('responsive-menu').classList.toggle('hide');
}

navLinks.forEach( function(item) {
  item.addEventListener('click', function() {
    burger.classList.toggle('animation');
    document.getElementById('responsive-menu').classList.toggle('hide');
  })
})
