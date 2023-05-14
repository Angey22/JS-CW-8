//! Видео - [0:15:30...0:45:50](https://www.youtube.com/watch?v=Fh8d14cY9AM&t=930s)

//! Задача:
// Написать скрипт, который будет обеспечивать хранение в "localStorage" данных введенных пользователем в текстовое поле формы, но не отправленное - не было "сабмита" формы.

//! Решение задачи:
// Импортируем настройки CSS стилей из соответствующих файлов и подключаем их через текущий JS файл к данной конкретной HTML странице (в которой подключается этот скрипт).
import '../css/common.css';
import '../css/feedback-form.css';

// Создаем переменную "throttle" и импортируем в нее одноименный метод из подключенной к сборке библиотеки "lodash.throttle" (см. в файле "package.json" графу "dependencies").
import throttle from 'lodash.throttle';

//! Обрати внимание на то, что мы подключили к проекту не всю большую библиотеку "lodash", а только один ее метод, в виде мини-библиотеки - "lodash.throttle".

// Создаем переменную для хранения текстового литерала - ключа, значения, которое должно хранится в "localStorage".
const STORAGE_KEY = 'feedback-msg';

// Создаем объект-ссылок на элементы находящиеся в HTML документа.
const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form  textarea'),
};

// "Вешаем" слушателей на форму по событию - 'submit', и на текстовое поле по событию - 'input', задавая им соответствующие колл-бек функции.
refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 200));

// Запускаем функцию, которая мониторит хранилище, и если там есть данные - обновляет DOM.
populateTextarea();


/*
 * Колл-бек функция "onFormSubmit(evt)":
 * - останавливает поведение по умолчанию;
 * - очищаезначение всех полей формы ("reset()");
 * - убирает сообщение из хранилища.
 */
function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('Отправляем форму');
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}


/*
 *  Колл-бек функция "onTextareaInput(evt)":
 * - получает значение введенное пользователем в текстовое поле;
 * - сохраняет полученное значение в хранилище "localStorage";
 * - запуск функции организован с учетом задержки реализованной с помощью метода "throttle".
 */
function onTextareaInput(evt) {
  const message = evt.target.value;

  localStorage.setItem(STORAGE_KEY, message);
}


/*
 * Функция "populateTextarea()":
 * - получает значение из хранилища;
 * - если там что-то было, обновляем DOM.
 */
function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}


// Домой
// сделать так чтобы сохраняло не только сообщение но и имя, и все в одном объекте

const formDataKey = 'data-JSON';
const formData = {};
let obgForm = '';

refs.form.addEventListener('input', jsonForm);

function jsonForm (e) {
  // console.log(e.target.name);
  // console.log(e.target.value);

  formData[e.target.name] = e.target.value;

  obgForm = JSON.stringify(formData);

  localStorage.setItem(formDataKey, obgForm);
  // console.log(obgForm);
}

console.log( JSON.parse(localStorage.getItem(formDataKey)));


//! "e.target.name" - это имя текущего тега на котором произошла событие 'input'. В нашем случае: <input name="name" ...>, а <textarea name="message" ...>.

//! "e.target.value" - это текст, введенный в соответствуещее поле.