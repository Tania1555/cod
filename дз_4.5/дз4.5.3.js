const fs = require('fs');
let folder = 'files';
let names = ['file1.txt', 'file2.txt', 'file3.txt'];
let promises = [];

for (let name of names) {
  promises.push(fs.promises.readFile(folder + '/' + name, 'utf8'));
}

Promise.all(promises)
  .then(data => {
    let result = data.join('');
    console.log(result)
  })
  .catch(err => {
    // обработка ошибок
    console.log('Ошибка!', err)
  });