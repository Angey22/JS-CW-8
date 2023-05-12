//! Видео - [1:15:30...1:23:40](https://www.youtube.com/watch?v=Fh8d14cY9AM&t=4530s)


// Импортируем настройки CSS стилей из соответствующих файлов и подключаем их через текущий JS файл к данной конкретной HTML странице (в которой подключается этот скрипт).
import '../css/common.css';
import '../css/gallery.css';


// Импортируем массив-объектов - исходную бзазу данных для создания разметки.
import countries from './countries.json';


// Импортируем шаблон "Handlebar".
import itemsTemplate from '../templates/gallery-items.hbs';


// Создаем переменную-ссылку на <ul> находящийся исходной в разметке соответствующего HTML документа, внутрь которого - будет вставлятся сгенерированная нашим скриптом разметка карточек.
const galleryRef = document.querySelector('.js-gallery');


// Создаем переменную "markup" и задаем ей в качестве значения - результат работы функции-шаблона "Handlebar" автоматического создания разметки.
const markup = itemsTemplate(countries);


// Вставляем в DOM сгенерированную разметку.
galleryRef.insertAdjacentHTML('beforeend', markup);

