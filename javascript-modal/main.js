var $showPopUp = document.querySelector('.blue');
var $content = document.querySelector('.pop-up');
var $clear = document.querySelector('.button-pop');
var $body = document.querySelector('.background');
var $top = document.querySelector('.hide');

function showContent(event) {
  $content.className = 'pop-up show';
  $body.className = 'background dark';
  $top.className = 'hide darker';
}

function clearContent(event) {
  $content.className = 'pop-up clear';
  $body.className = 'background';
  $top.className = 'hide';
}

$showPopUp.addEventListener('click', showContent);
$clear.addEventListener('click', clearContent);
