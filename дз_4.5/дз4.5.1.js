const fs = require('fs');
let name = 'text.txt'
fs.readFile(name, 'utf8', function(err, data) {
    if (err) {
      // обработка ошибок
      console.log('Ошибка!')
    } else {
      // обработка данных
      console.log(data)
    }
  });