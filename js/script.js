const hotelSearchButton = document.querySelector('.hotel-search-button');
const modal = document.querySelector('.modal');
const adults = modal.querySelector('.input-adults');
const children = modal.querySelector('.input-children');
const modalForm = modal.querySelector('form');
const dateIn = modal.querySelector('.input-in');

hotelSearchButton.addEventListener('click', function () {
  modal.classList.toggle('modal-close');
  dateIn.focus();
  });

modalForm.addEventListener('submit', function (evt) {
  if (!adults.value || !children.value) {
   evt.preventDefault();
  } else {
      localStorage.setItem('adults', adults.value);
      localStorage.setItem('children', children.value);
  }
});

modal.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    modal.classList.add('modal-close');
  }
});
