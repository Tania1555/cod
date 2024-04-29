const fs = require('fs');
let text = 'My name is Bob'
fs.writeFile('file.txt', text, function(err) {
    if (!err) {
      console.log('Данные успешно записаны в файл');
    } else {
      console.log('Ошибка!', err);
    }
  });