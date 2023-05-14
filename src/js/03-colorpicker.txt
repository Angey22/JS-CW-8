//! Видео - [0:46:00...1:15:20](https://www.youtube.com/watch?v=Fh8d14cY9AM&t=2760s)


// Дополнительная информация:
// - метод "performance.now()" - предназначен для реализации замеров времени осуществления той или иной функции (см. - https://developer.mozilla.org/ru/docs/Web/API/Performance/now).


// Импортируем шаблоны "Handlebar".
import colorCardTpl from '../templates/color-card.hbs';
import colorCardsTpl from '../templates/color-cards.hbs';


// Импортируем массив-объектов - исходную бзазу данных для создания разметки.
import colors from './colors.json';
//! Обрати внимание на то, что соответствующий массив-объектов содержится в файле формата "JSON". Дело в том, что любой зборщик (например - "Parsel") при обработки файлов подобного формата - автоматически парсит его содержимое, и приобразовывает из строки в массив или объект, в зависимости от того, какой тип данных находится внутри файла.


// Импортируем настройки CSS стилей из соответствующих файлов и подключаем их через текущий JS файл к данной конкретной HTML странице (в которой подключается этот скрипт).
import '../css/common.css';
import '../css/colorpicker.css';


// Выводим в лог импортируемые из других модулей данные для их проверки.
console.log("colors  =>", colors);
console.log('---------------------------------------------');

console.log("colorCardsTpl(colors[0]) =>", colorCardTpl(colors[0]));
console.log('---------------------------------------------');

console.log("colorCardsTpl(colors[0]) =>", colorCardsTpl(colors));


// Создаем переменную-ссылку на <div> находящийся исходной в разметке соответствующего HTML документа, внутрь которого - будет вставлятся сгенерированная нашим скриптом разметка карточек.
const paletteContainer = document.querySelector('.js-palette');


// Создаем переменную "cardsMarkup" и задаем ей в качестве значения - результат работы функции автоматического создания разметки.
const cardsMarkup = createColorCardsMarkup(colors);


// Вставляем в DOM сгенерированную разметку.
paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);


// "Вешаем" слушатель на <div> по событию 'click', и задаем колл-бек функцию при регистрации этого события.
paletteContainer.addEventListener('click', onPaletteContainerClick);

function createColorCardsMarkup(colors) {
  //! Две аналогичные записи создания разметки по шаблону одного элемента:
  // return colors.map(color => colorCardTpl(color)).join('');
  // return colors.map(colorCardTpl).join('');

  //! Создание разметки на основе 2-го шаблона, предназначенного для оработки массива данных.
  return colorCardsTpl(colors);
}


//! Описание кода всех ниже приведенных функций - см. в разборе предыдущего занятия, репозиторий - "JS-CW-7".
function onPaletteContainerClick(evt) {
  const isColorSwatchEl = evt.target.classList.contains('color-swatch');

  if (!isColorSwatchEl) {
    return;
  }

  const swatchEl = evt.target;
  const parentColorCard = swatchEl.closest('.color-card');

  removeActiveCardClass();
  addActiveCardClass(parentColorCard);
  setBodyBgColor(swatchEl.dataset.hex);
}

function setBodyBgColor(color) {
  document.body.style.backgroundColor = color;
}

function removeActiveCardClass() {
  const currentActiveCard = document.querySelector('.color-card.is-active');

  if (currentActiveCard) {
    currentActiveCard.classList.remove('is-active');
  }
}

function addActiveCardClass(card) {
  card.classList.add('is-active');
}