var count = 0;

function changingColor(event) {
  if (event.key === $color[count].textContent) {
    $color[count].className = 'green';
    count++;
    $color[count].className = 'bottom-correct';
  } else {
    $color[count].className = 'red bottom-red';
  }
}

var $color = document.querySelectorAll('span');
document.addEventListener('keydown', changingColor);
