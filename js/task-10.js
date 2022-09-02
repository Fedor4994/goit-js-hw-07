// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.
const refs = {
  createBtnEl: document.querySelector('[data-create]'),
  destroyBtnEl: document.querySelector('[data-destroy]'),
  containerEl: document.querySelector('#boxes'),
  inputEl: document.querySelector('[min="1"]'),
};

const arr = [];
let widthAndHight = 20;
refs.containerEl.classList.add('div-container');

refs.createBtnEl.addEventListener('click', createBoxes);
refs.destroyBtnEl.addEventListener('click', destroyBoxes);

function createBoxes() {
  for (let i = 0; i < refs.inputEl.value; i += 1) {
    const itemEl = document.createElement('div');
    widthAndHight += 10;
    itemEl.style.width = `${widthAndHight}px`;
    itemEl.style.height = `${widthAndHight}px`;
    itemEl.style.backgroundColor = `${getRandomHexColor()}`;
    refs.containerEl.insertAdjacentHTML('beforeend', itemEl.outerHTML);
  }
}

function destroyBoxes() {
  refs.containerEl.innerHTML = '';
  widthAndHight = 20;
  refs.inputEl.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.
// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
