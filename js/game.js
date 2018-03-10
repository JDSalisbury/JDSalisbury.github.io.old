// Add a button and collapsable description
// to your portfolio projects so when the user
// clicks the button the descriptions expand and collapse


function expandButton(event) {
  if (event.target && event.target.className == "info__click") {

    const element = event.target.nextElementSibling;

    if (element.style.display === "block") {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    };
  };
}

document.addEventListener('click', expandButton, true);
