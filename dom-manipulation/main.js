var clickedNum = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');
function counterVariable(event) {
  clickedNum++;
  $clickCount.textContent = 'Clicks: ' + clickedNum;
  if (clickedNum < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (clickedNum < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (clickedNum < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (clickedNum < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (clickedNum < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}

$hotButton.addEventListener('click', counterVariable);
