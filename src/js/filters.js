//! Видео - [0:52:00...0:00:00](https://www.youtube.com/watch?v=mzWl1sWTT9U&t=3120s)

// Создаем переменную-ссылку на форму
const filterForm = document.querySelector('.filter-form');

// "Вешаем" слушателя на форму
filterForm.addEventListener('submit', evt => {
  evt.preventDefault();

  console.groupCollapsed('Примеры получения данных из формы')
  // Смотрими на объкт - набор элементов формы.
  console.log(filterForm.elements);

  // Смотрим значение конкретного "селекта".
  console.log('filterForm.elements.color.value =>', filterForm.elements.color.value);

  // Собираем все данные с формы с помощью служебной итерируемой сущности - "FormData".
  const formData = new FormData(filterForm);
  console.log("formData =>", formData);

  // У сущности "FormData" есть метод перебора данных - "forEach", который позволяет получить набор данных из формы.
  formData.forEach((value, name) => console.log(`${name} =>`, value));

  console.groupEnd();

  

});