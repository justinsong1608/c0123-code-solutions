var $title = document.querySelector('h1');
var interval = setInterval(explode, 1000);

function explode() {
  if ($title.textContent > 1) {
    $title.textContent--;
  } else {
    $title.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(interval);
  }
}
