
describe('my portfolio', () => {

  describe('button expands', () => {

    it('opens info', () => {

      expect(expandButton()).toEqual(element.style.display === "none");
    });
  });

  describe('Toggle modal', function () {

    it('Shows modal', function () {

      expect(toggleModal()).toEqual(modal.classList.toggle("show-modal"));
    });
  });

});


describe('Hello world', function () {
  it('says hello', function () {
    expect(helloWorld()).toEqual('Hello world!');
  });
});
