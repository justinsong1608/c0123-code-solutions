var $left = document.querySelector('.left');
var $right = document.querySelector('.right');
var $img = document.querySelector('img');
var $circleZero = document.querySelector('.zero');
var $circleOne = document.querySelector('.one');
var $circleTwo = document.querySelector('.two');
var $circleThree = document.querySelector('.three');
var $circleFour = document.querySelector('.four');
var count = 1;
var intervalID = setInterval(carousel, 3000);

function carousel() {
  if (count === 0) {
    $img.setAttribute('src', 'images/001.png');
    $circleZero.setAttribute('class', 'fa-solid fa-circle zero');
    $circleOne.setAttribute('class', 'fa-sharp fa-regular fa-circle one');
    $circleTwo.setAttribute('class', 'fa-sharp fa-regular fa-circle two');
    $circleThree.setAttribute('class', 'fa-sharp fa-regular fa-circle three');
    $circleFour.setAttribute('class', 'fa-sharp fa-regular fa-circle four');
    count++;
  } else if (count === 1) {
    $img.setAttribute('src', 'images/004.png');
    $circleZero.setAttribute('class', 'fa-sharp fa-regular fa-circle zero');
    $circleOne.setAttribute('class', 'fa-solid fa-circle one');
    $circleTwo.setAttribute('class', 'fa-sharp fa-regular fa-circle two');
    $circleThree.setAttribute('class', 'fa-sharp fa-regular fa-circle three');
    $circleFour.setAttribute('class', 'fa-sharp fa-regular fa-circle four');
    count++;
  } else if (count === 2) {
    $img.setAttribute('src', 'images/007.png');
    $circleZero.setAttribute('class', 'fa-sharp fa-regular fa-circle zero');
    $circleOne.setAttribute('class', 'fa-sharp fa-regular fa-circle one');
    $circleTwo.setAttribute('class', 'fa-solid fa-circle two');
    $circleThree.setAttribute('class', 'fa-sharp fa-regular fa-circle three');
    $circleFour.setAttribute('class', 'fa-sharp fa-regular fa-circle four');
    count++;
  } else if (count === 3) {
    $img.setAttribute('src', 'images/025.png');
    $circleZero.setAttribute('class', 'fa-sharp fa-regular fa-circle zero');
    $circleOne.setAttribute('class', 'fa-sharp fa-regular fa-circle one');
    $circleTwo.setAttribute('class', 'fa-sharp fa-regular fa-circle two');
    $circleThree.setAttribute('class', 'fa-solid fa-circle three');
    $circleFour.setAttribute('class', 'fa-sharp fa-regular fa-circle four');
    count++;
  } else if (count === 4) {
    $img.setAttribute('src', 'images/039.png');
    $circleZero.setAttribute('class', 'fa-sharp fa-regular fa-circle zero');
    $circleOne.setAttribute('class', 'fa-sharp fa-regular fa-circle one');
    $circleTwo.setAttribute('class', 'fa-sharp fa-regular fa-circle two');
    $circleThree.setAttribute('class', 'fa-sharp fa-regular fa-circle three');
    $circleFour.setAttribute('class', 'fa-solid fa-circle four');
    count = 0;
  }
}

function zero(event) {
  $img.setAttribute('src', 'images/001.png');
  $circleZero.setAttribute('class', 'fa-solid fa-circle zero');
  $circleOne.setAttribute('class', 'fa-sharp fa-regular fa-circle one');
  $circleTwo.setAttribute('class', 'fa-sharp fa-regular fa-circle two');
  $circleThree.setAttribute('class', 'fa-sharp fa-regular fa-circle three');
  $circleFour.setAttribute('class', 'fa-sharp fa-regular fa-circle four');
  count = 1;
  clearInterval(intervalID);
  intervalID = setInterval(carousel, 3000);
}
$circleZero.addEventListener('click', zero);

function one(event) {
  $img.setAttribute('src', 'images/004.png');
  $circleZero.setAttribute('class', 'fa-sharp fa-regular fa-circle zero');
  $circleOne.setAttribute('class', 'fa-solid fa-circle one');
  $circleTwo.setAttribute('class', 'fa-sharp fa-regular fa-circle two');
  $circleThree.setAttribute('class', 'fa-sharp fa-regular fa-circle three');
  $circleFour.setAttribute('class', 'fa-sharp fa-regular fa-circle four');
  count = 2;
  clearInterval(intervalID);
  intervalID = setInterval(carousel, 3000);
}
$circleOne.addEventListener('click', one);

function two(event) {
  $img.setAttribute('src', 'images/007.png');
  $circleZero.setAttribute('class', 'fa-sharp fa-regular fa-circle zero');
  $circleOne.setAttribute('class', 'fa-sharp fa-regular fa-circle one');
  $circleTwo.setAttribute('class', 'fa-solid fa-circle two');
  $circleThree.setAttribute('class', 'fa-sharp fa-regular fa-circle three');
  $circleFour.setAttribute('class', 'fa-sharp fa-regular fa-circle four');
  count = 3;
  clearInterval(intervalID);
  intervalID = setInterval(carousel, 3000);
}
$circleTwo.addEventListener('click', two);

function three(event) {
  $img.setAttribute('src', 'images/025.png');
  $circleZero.setAttribute('class', 'fa-sharp fa-regular fa-circle zero');
  $circleOne.setAttribute('class', 'fa-sharp fa-regular fa-circle one');
  $circleTwo.setAttribute('class', 'fa-sharp fa-regular fa-circle two');
  $circleThree.setAttribute('class', 'fa-solid fa-circle three');
  $circleFour.setAttribute('class', 'fa-sharp fa-regular fa-circle four');
  count = 4;
  clearInterval(intervalID);
  intervalID = setInterval(carousel, 3000);
}
$circleThree.addEventListener('click', three);

function four(event) {
  $img.setAttribute('src', 'images/039.png');
  $circleZero.setAttribute('class', 'fa-sharp fa-regular fa-circle zero');
  $circleOne.setAttribute('class', 'fa-sharp fa-regular fa-circle one');
  $circleTwo.setAttribute('class', 'fa-sharp fa-regular fa-circle two');
  $circleThree.setAttribute('class', 'fa-sharp fa-regular fa-circle three');
  $circleFour.setAttribute('class', 'fa-solid fa-circle four');
  count = 0;
  clearInterval(intervalID);
  intervalID = setInterval(carousel, 3000);
}
$circleFour.addEventListener('click', four);

function right(event) {
  if (count === 1) {
    $img.setAttribute('src', 'images/004.png');
    $circleZero.setAttribute('class', 'fa-sharp fa-regular fa-circle zero');
    $circleOne.setAttribute('class', 'fa-solid fa-circle one');
    $circleTwo.setAttribute('class', 'fa-sharp fa-regular fa-circle two');
    $circleThree.setAttribute('class', 'fa-sharp fa-regular fa-circle three');
    $circleFour.setAttribute('class', 'fa-sharp fa-regular fa-circle four');
    count = 2;
    clearInterval(intervalID);
    intervalID = setInterval(carousel, 3000);
  } else if (count === 2) {
    $img.setAttribute('src', 'images/007.png');
    $circleZero.setAttribute('class', 'fa-sharp fa-regular fa-circle zero');
    $circleOne.setAttribute('class', 'fa-sharp fa-regular fa-circle one');
    $circleTwo.setAttribute('class', 'fa-solid fa-circle two');
    $circleThree.setAttribute('class', 'fa-sharp fa-regular fa-circle three');
    $circleFour.setAttribute('class', 'fa-sharp fa-regular fa-circle four');
    count = 3;
    clearInterval(intervalID);
    intervalID = setInterval(carousel, 3000);
  } else if (count === 3) {
    $img.setAttribute('src', 'images/025.png');
    $circleZero.setAttribute('class', 'fa-sharp fa-regular fa-circle zero');
    $circleOne.setAttribute('class', 'fa-sharp fa-regular fa-circle one');
    $circleTwo.setAttribute('class', 'fa-sharp fa-regular fa-circle two');
    $circleThree.setAttribute('class', 'fa-solid fa-circle three');
    $circleFour.setAttribute('class', 'fa-sharp fa-regular fa-circle four');
    count = 4;
    clearInterval(intervalID);
    intervalID = setInterval(carousel, 3000);
  } else if (count === 4) {
    $img.setAttribute('src', 'images/039.png');
    $circleZero.setAttribute('class', 'fa-sharp fa-regular fa-circle zero');
    $circleOne.setAttribute('class', 'fa-sharp fa-regular fa-circle one');
    $circleTwo.setAttribute('class', 'fa-sharp fa-regular fa-circle two');
    $circleThree.setAttribute('class', 'fa-sharp fa-regular fa-circle three');
    $circleFour.setAttribute('class', 'fa-solid fa-circle four');
    count = 0;
    clearInterval(intervalID);
    intervalID = setInterval(carousel, 3000);
  } else if (count === 0) {
    $img.setAttribute('src', 'images/001.png');
    $circleZero.setAttribute('class', 'fa-solid fa-circle zero');
    $circleOne.setAttribute('class', 'fa-sharp fa-regular fa-circle one');
    $circleTwo.setAttribute('class', 'fa-sharp fa-regular fa-circle two');
    $circleThree.setAttribute('class', 'fa-sharp fa-regular fa-circle three');
    $circleFour.setAttribute('class', 'fa-sharp fa-regular fa-circle four');
    count = 1;
    clearInterval(intervalID);
    intervalID = setInterval(carousel, 3000);
  }
}
$right.addEventListener('click', right);

function left(event) {
  if (count === 1) {
    $img.setAttribute('src', 'images/039.png');
    $circleZero.setAttribute('class', 'fa-sharp fa-regular fa-circle zero');
    $circleOne.setAttribute('class', 'fa-sharp fa-regular fa-circle one');
    $circleTwo.setAttribute('class', 'fa-sharp fa-regular fa-circle two');
    $circleThree.setAttribute('class', 'fa-sharp fa-regular fa-circle three');
    $circleFour.setAttribute('class', 'fa-solid fa-circle four');
    count = 0;
    clearInterval(intervalID);
    intervalID = setInterval(carousel, 3000);
  } else if (count === 2) {
    $img.setAttribute('src', 'images/001.png');
    $circleZero.setAttribute('class', 'fa-solid fa-circle zero');
    $circleOne.setAttribute('class', 'fa-sharp fa-regular fa-circle one');
    $circleTwo.setAttribute('class', 'fa-sharp fa-regular fa-circle two');
    $circleThree.setAttribute('class', 'fa-sharp fa-regular fa-circle three');
    $circleFour.setAttribute('class', 'fa-sharp fa-regular fa-circle four');
    count = 1;
    clearInterval(intervalID);
    intervalID = setInterval(carousel, 3000);
  } else if (count === 3) {
    $img.setAttribute('src', 'images/004.png');
    $circleZero.setAttribute('class', 'fa-sharp fa-regular fa-circle zero');
    $circleOne.setAttribute('class', 'fa-solid fa-circle one');
    $circleTwo.setAttribute('class', 'fa-sharp fa-regular fa-circle two');
    $circleThree.setAttribute('class', 'fa-sharp fa-regular fa-circle three');
    $circleFour.setAttribute('class', 'fa-sharp fa-regular fa-circle four');
    count = 2;
    clearInterval(intervalID);
    intervalID = setInterval(carousel, 3000);
  } else if (count === 4) {
    $img.setAttribute('src', 'images/007.png');
    $circleZero.setAttribute('class', 'fa-sharp fa-regular fa-circle zero');
    $circleOne.setAttribute('class', 'fa-sharp fa-regular fa-circle one');
    $circleTwo.setAttribute('class', 'fa-solid fa-circle two');
    $circleThree.setAttribute('class', 'fa-sharp fa-regular fa-circle three');
    $circleFour.setAttribute('class', 'fa-sharp fa-regular fa-circle four');
    count = 3;
    clearInterval(intervalID);
    intervalID = setInterval(carousel, 3000);
  } else if (count === 0) {
    $img.setAttribute('src', 'images/025.png');
    $circleZero.setAttribute('class', 'fa-sharp fa-regular fa-circle zero');
    $circleOne.setAttribute('class', 'fa-sharp fa-regular fa-circle one');
    $circleTwo.setAttribute('class', 'fa-sharp fa-regular fa-circle two');
    $circleThree.setAttribute('class', 'fa-solid fa-circle three');
    $circleFour.setAttribute('class', 'fa-sharp fa-regular fa-circle four');
    count = 4;
    clearInterval(intervalID);
    intervalID = setInterval(carousel, 3000);
  }
}
$left.addEventListener('click', left);
