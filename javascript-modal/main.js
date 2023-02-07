var $showPopUp = document.querySelector('.blue');
var $content = document.querySelector('.pop-up');
var $clear = document.querySelector('.button-pop');
var $body = document.querySelector('.background');

function showContent(event) {
  $content.className = 'pop-up show';
  $body.className = 'background dark';
}

function clearContent(event) {
  $content.className = 'pop-up clear';
  $body.className = 'background';
}

$showPopUp.addEventListener('click', showContent);
$clear.addEventListener('click', clearContent);
