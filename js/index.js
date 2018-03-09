// Add a button in your navigation that will toggle the
// visibility of your actual site navigation.

const clickMenu = document.querySelector('.drop__button');

clickMenu.addEventListener('click', function(){
  const menu = document.querySelector('nav ul');
  if(menu.style.display === "block"){
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  };
});

// Create a modal box that pops up with your bio
// information whenever a button or link is pressed

var modal = document.querySelector(".modal");
  var trigger = document.querySelector(".trigger");
  var closeButton = document.querySelector(".close-button");

  function toggleModal() {
      modal.classList.toggle("show-modal");
  }

  function windowOnClick(event) {
      if (event.target === modal) {
          toggleModal();
      }
  }

  trigger.addEventListener("click", toggleModal);
  closeButton.addEventListener("click", toggleModal);
  window.addEventListener("click", windowOnClick);
