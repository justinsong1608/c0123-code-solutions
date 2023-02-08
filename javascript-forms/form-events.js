function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log(event.target.name, event.target.value);
}

var $input = document.querySelectorAll('input');
var $textArea = document.querySelector('textarea');

$input[0].addEventListener('focus', handleFocus);
$input[0].addEventListener('blur', handleBlur);
$input[0].addEventListener('input', handleInput);

$input[1].addEventListener('focus', handleFocus);
$input[1].addEventListener('blur', handleBlur);
$input[1].addEventListener('input', handleInput);

$textArea.addEventListener('focus', handleFocus);
$textArea.addEventListener('blur', handleBlur);
$textArea.addEventListener('input', handleInput);
