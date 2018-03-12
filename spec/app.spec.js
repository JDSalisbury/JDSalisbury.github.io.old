describe('my portfolio', () => {

  describe('button expands', () => {

    it('opens info', () => {

      expect(expandButton()).toEqual(element.style.display === "none");
    });
  });

  describe('Toggle modal', () => {

    it('Shows modal', function() {

      expect(toggleModal()).toEqual(modal.classList.toggle("show-modal"));
    });
  });

  describe('imageSwitcher', () => {
    it('moves image 300px to the left or right', () => {
      expect(switchImg(), )
    });
  });

  describe('popOutModal', () => {
    it('background becomes dark and Modal opens', () => {
      expect(windowOnClick(), )
    })
  })



});


describe('Hello world', function() {
  it('says hello', function() {
    expect(helloWorld()).toEqual('Hello world!');
  });
});

// test these functions
//
// function switchImg() {
//   inner.style.left = -width * currentImageIndex + 'px';
// };
//
// function windowOnClick(event) {
//   if (event.target === modal) {
//     toggleModal();
//   }
// }
