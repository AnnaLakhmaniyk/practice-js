import BSN from 'bootstrap.native';

const modal = new BSN.Modal('#staticBackdrop');

const modalEl = document.querySelector('#staticBackdrop');
const btnEl = document.querySelector('button[data-subscribe]');
const PROMPT = 1000;
const MAX_PROMT = 3;
let promtCounter = 0;
let hesSub = false;
openMadal(); //виклик модального вікна
modalEl.addEventListener('hide.bs.modal', openMadal);
btnEl.addEventListener('click', onSubBtn);

function openMadal() {
  if (promtCounter === MAX_PROMT || hesSub) {
    console.log('максимальна к-сть откриття модалки або підписався');
    return;
  }
  setTimeout(() => {
    console.log('OPENN');
    modal.show();
    promtCounter += 1;
  }, PROMPT);
}
function onSubBtn() {
  hesSub = true;
  modal.hide();
}
