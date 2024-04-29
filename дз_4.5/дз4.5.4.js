const fs = require('fs');
let name = 'document.txt';
let str = '1999';
let str_new = '2024';

fs.promises.readFile(name, 'utf8')
  .then(data => {
    // обработка данных
    data = data.replace(str, str_new);
    return fs.promises.writeFile(name.slice(0, -4) + '_new' + name.slice(-4), data);
  })
  .then(() => {
    // успешная запись
    console.log('Операция прошла успешно')
  })
  .catch(err => {
    // обработка ошибок
    console.log('Ошибка', err)
  });