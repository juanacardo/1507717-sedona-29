const hotelSearchButton = document.querySelector('.hotel-search-button');
const modal = document.querySelector('.modal');
const hotelSubmitButton = modal.querySelector('.modal-button');
const adults = modal.querySelector('.input-adults');
const children = modal.querySelector('.input-children');
const modalForm = modal.querySelector('form');
const dateIn = modal.querySelector('.input-in');
const dateOut = modal.querySelector('.input-out');

let isStorageSupport = true;
let adultsStorage = '';
let childrenStorage = '';

modal.classList.remove('modal-show');

try {
  adultsStorage = localStorage.getItem('adults');
} catch (err) {
  isStorageSupport = false;
}

try {
  childrenStorage = localStorage.getItem('children');
} catch (err) {
  isStorageSupport = false;
}

hotelSearchButton.addEventListener('click', function () {
  modal.classList.toggle('modal-down');
  modal.classList.remove('modal-error');
  if (adultsStorage) {
    adults.value = adultsStorage;
  }
  if (childrenStorage) {
    children.value = childrenStorage;
  }
});

modalForm.addEventListener('submit', function (evt) {
  if (isStorageSupport) {
    localStorage.setItem('adults', adults.value);
    localStorage.setItem('children', children.value);
  }
});

hotelSubmitButton.addEventListener('click', function (evt) {
if (!adults.value || !dateIn.value || !dateOut.value) {
    evt.preventDefault();
    modal.classList.remove('modal-error');
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add('modal-error');
  }
});

modal.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    modal.classList.remove('modal-down');
    modal.classList.remove('modal-error');
  }
});
