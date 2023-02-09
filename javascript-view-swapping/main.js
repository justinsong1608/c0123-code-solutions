var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

function target(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if ($tab[i] === event.target) {
        $tab[i].classList.add('active');
      } else {
        $tab[i].classList.remove('active');
      }
    }
    var data = event.target.getAttribute('data-view');
    for (var k = 0; k < $view.length; k++) {
      if (data === $tab[k].getAttribute('data-view')) {
        $view[k].className = 'view';
      } else {
        $view[k].className = 'view hidden';
      }
    }
  }
}
$tabContainer.addEventListener('click', target);
