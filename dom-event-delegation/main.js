var $taskList = document.querySelector('.task-list');

function target(e) {
  console.log('event.target:', e.target);
  console.log('event.target.tagName:', e.target.tagName);
  if (e.target && e.target.nodeName === 'BUTTON') {
    var closest = e.target.closest('.task-list-item');
    console.log('closest .task-list-item:', closest);
    closest.remove();
  }
}

$taskList.addEventListener('click', target);
