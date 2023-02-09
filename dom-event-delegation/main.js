var $taskList = document.querySelector('.task-list');

function target(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
}

$taskList.addEventListener('click', target);

// var $parent = document.querySelector('.task-list-item');

function button(e) {
  if (e.target && e.target.nodeName === 'BUTTON') {
    var closest = e.target.closest('.task-list-item');
    console.log('closest .task-list-item:', closest);
    closest.remove();
  }
}

$taskList.addEventListener('click', button);
