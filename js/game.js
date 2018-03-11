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


// Add an image carousel. This can be a carousel of screenshots
// of your projects (perhaps they link to your projects)

const carousels = document.getElementsByClassName('carousel');

[].forEach.call(carousels, function(items) {
  const next = items.getElementsByClassName('next')[0];
  const prev = items.getElementsByClassName('prev')[0];
  const inner = items.getElementsByClassName('inner')[0];
  const imgs = inner.getElementsByTagName('img');

  currentImageIndex = 0;
  width = 300;

  function switchImg() {
    inner.style.left = -width * currentImageIndex + 'px';
  };

  next.addEventListener('click', function() {
    currentImageIndex++;

    if (currentImageIndex >= imgs.length) {
      currentImageIndex = 0;
    };

    switchImg();

  });

  prev.addEventListener('click', function() {
    currentImageIndex--;

    if (currentImageIndex < 0) {
      currentImageIndex = imgs.length - 1;
    };

    switchImg();

  });

});


// Test

function helloWorld() {
  return 'Hello world!';
}
