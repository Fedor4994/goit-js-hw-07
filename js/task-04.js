// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
const refs = {
  decrBtnEl: document.querySelector('[data-action="decrement"]'),
  incrBtnEl: document.querySelector('[data-action="increment"]'),
  outputFieldEl: document.querySelector('#value'),
};

let counterValue = 0;

refs.decrBtnEl.addEventListener('click', onClickDecrementButton);
refs.incrBtnEl.addEventListener('click', onClickIncrementButton);

function onClickDecrementButton() {
  counterValue -= 1;
  refs.outputFieldEl.textContent = counterValue;
}

function onClickIncrementButton() {
  counterValue += 1;
  refs.outputFieldEl.textContent = counterValue;
}
