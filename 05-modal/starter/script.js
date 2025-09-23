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


const openModal = function () {
    // remove hidden classname from modal
  modalEl.classList.remove('hidden');

    // remove hidden keyword classname from overlay
  overlayEl.classList.remove('hidden');
};

const closeModal = function () {
    // add hidden classname to modal
  modalEl.classList.add('hidden');

    // add hidden classname to overlay
  overlayEl.classList.add('hidden');
};


btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);



