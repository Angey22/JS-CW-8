//! Видео - [0:01:00...0:15:10](https://www.youtube.com/watch?v=Fh8d14cY9AM&t=60s)

/*
* Преобразование значения в JSON и обратно:
*   - JSON.stringify() - преобразование в формат JSON;
*   - JSON.parse() - обратная опереция преобразования, из формата JSON.
*/
console.groupCollapsed('Преобразование значения в JSON и обратно');

//! Преобразовываем объект в строку
// Создаем объект "user"
const user = {
  name: 'Mango',
  age: 2,
}
console.log("user =>", user)

// Преобразовываем объект "user" в строку с помощью метода "JSON.stringify()".
console.log("JSON.stringify(user) =>", JSON.stringify(user))
console.log('---------------------------------------------');

//! Преобразовываем строку в объект
// Создаем переменную со строчным литералом определенного вида.
const savedUserData = '{"name":"Mango","age":2}';
console.log("savedUserData =>", savedUserData)

// Преобразовываем строку в объект
console.log('JSON.parse(savedUserData) =>', JSON.parse(savedUserData));

console.groupEnd();
console.log('-1-------------------------------------------');


/*
* Web Storage API:
*  - setItem(key, value) - делает новую, или обновляет уже существующую запись в хранилище;
*  - getItem(key) - возвращает из хранилища значение с ключом key;
*  - removeItem(key) - удаляет из хранилища запись с ключом key;
*  - clear() - полностью очищает все записи в хранилище;
*  - length - хранит количество записей в хранилище.
*/
console.groupCollapsed('Web Storage API');

//! Web Storage - это хранилище информации с ограниченным объемом и возможностями, которое расположено на ПК пользователя (на жестком диске ПК пользователя), в его браузере.

// Просмотриваем объект "localStorage", расположенный внутри объекта "window" браузера.
console.log('localStorage =>', localStorage);

// Сохраняем значение в "localStorage" с помошью прямого ввода ключа(key) и значения(value).
localStorage.setItem('my-data-1', 'qwe');

// Сохраняем значение в "localStorage" с помошью метода "JSON.stringify([объект])".
localStorage.setItem('my-data', JSON.stringify({ name: 'Mango', age: 2 }));

// Создаем переменную "savedData" и задаем ей в качестве значения текстовый литерал, который хранится в "localStorage" под определенным ключом (key).
const savedData = localStorage.getItem('my-data');
console.log('savedData =>', savedData);
//! Метод "getItem()" - не производит парсинг данных, он возвращает их в том виде в котором они есть (в виде строки).

// Создаем переменную "parsedData" и задаем ей в качестве значения преобразованый с помощью парсинга текстовый литерал из переменной "savedData".
const parsedData = JSON.parse(savedData);
console.log('parsedData =>', parsedData);

//! Все сохраняемые в "localStorage" данные сохраняются с привязкой к конкретному сайту и могут быть использованы при работе пользователя с этим конктетным сайтом. Однако, эти данные хранятся на одном определенном устройстве, и если пользователь зайдет на сайт с другого устройства - соответствующих данных НЕ будет!

//! Все сохраняемые в "SesionStorage" данные сохраняются с привязкой к конкретной текущего вкладке сайта, и хранятся только до тех пор, покаместь эта вкладка не будет закрыта пользователем.

//! В хранилищах "localStorage" и "SesionStorage" хранят, в основном - объекты данных. При этом, любые методы объектов - не проходят JSON преобразования, и попросту удаляются из преобразованного объекта.

// Проверяем количество записей находящихся в хранилище "localStorage",
console.log('Проверка до удаления - "localStorage.length =>"', localStorage.length);

// Удаляем из "localStorage" данные привязанные к ключу ""
// localStorage.removeItem('my-data-1'); //!!!

// Проверяем количество записей находящихся в хранилище "localStorage".
console.log('Проверка после удаления - "localStorage.length =>"', localStorage.length);

// Полностью очищаем хранилище "localStorage"
// localStorage.clear(); //!!!

console.groupEnd();
console.log('-2-------------------------------------------');
