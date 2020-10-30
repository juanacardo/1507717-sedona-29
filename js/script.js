const hotelSearchButton = document.querySelector('.hotel-search-button');
const modal = document.querySelector('.modal');
const adults = modal.querySelector('.input-adults');
const children = modal.querySelector('.input-children');
const modalForm = modal.querySelector('form');
const dateIn = modal.querySelector('.input-in');

let isStorageSupport = true;
let adultsStorage = '';
let childrenStorage = '';

try {
  adultsStorage = localStorage.getItem("adults");
} catch (err) {
  isStorageSupport = false;
}

try {
  childrenStorage = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

hotelSearchButton.addEventListener('click', function () {
  modal.classList.toggle('modal-show');
  modal.classList.remove('modal-error');
  if (adultsStorage) {
  adults.value = adultsStorage;
  }
  if (childrenStorage) {
  children.value = childrenStorage;
  }
  dateIn.focus();
});

modalForm.addEventListener('submit', function (evt) {
  if (!adults.value) {
    evt.preventDefault();
    modal.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
    localStorage.setItem('adults', adults.value);
    localStorage.setItem('children', children.value);
    }
  }
});

modal.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
  modal.classList.remove('modal-show');
  modal.classList.remove('modal-error');
  }
});
