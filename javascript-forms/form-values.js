var $contactForm = document.querySelector('#contact-form');
$contactForm.addEventListener('submit', submitInfo);

function submitInfo(event) {
  event.preventDefault();
  var newObj = {};
  newObj.name = $contactForm.elements[0].value;
  newObj.email = $contactForm.elements[1].value;
  newObj.message = $contactForm.elements[2].value;
  console.log('messageData:', newObj);
  $contactForm.reset();
}
