var clicks = true;

var $circleAdjust = document.querySelector('.circle-adjust');
var $circleColor = document.querySelector('.circle');

function changeColor(event) {
  if (clicks === true) {
    $circleAdjust.className = 'circle-adjust black';
    $circleColor.className = 'circle black';
    clicks = false;
  } else {
    $circleAdjust.className = 'circle-adjust yellow';
    $circleColor.className = 'circle yellow';
    clicks = true;
  }
}

$circleColor.addEventListener('click', changeColor);
