////////////////////////////////////
// // // Hour 1 Code - Modals
'use strict';

// modal elements
const modalEl = document.querySelector('.modal');

// overlay element
const overlayEl = document.querySelector('.overlay');

// close modal
const btnCloseModalEl = document.querySelector('.close-modal');

// open modal
const btnsOpenModalEl = document.querySelectorAll('.show-modal');


let lastFocusedButton = null;
const openModal = function () {
    // remove hidden classname from modal
  modalEl.classList.remove('hidden');

    // remove hidden keyword classname from overlay
  overlayEl.classList.remove('hidden');

  modalEl.focus();
  lastFocusedButton = document.activeElement;
};


const closeModal = function () {
    // add hidden classname to modal
  modalEl.classList.add('hidden');

    // add hidden classname to overlay
  overlayEl.classList.add('hidden');
  if (lastFocusedButton) {
    lastFocusedButton.focus();
  };
};


btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);


//////////////////////////////////////////
// // // Hour 2 Code - Keyboard Events

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
        closeModal();
    }
});

modalEl.setAttribute('role', 'dialog');
modalEl.setAttribute('aria-modal', 'true');

btnCloseModalEl.setAttribute('aria-label', 'Close modal');
