const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'work3',
    password: ''
})

connection.connect( err => {
    if(err){
        console.error('Ошибка: '+err)
    }
    else{
        console.log('success!');
    }
}
)

const user1 = ['Slava', 'slava@mail.ru', 16, 'Russia', 10000];
connection.query('INSERT INTO users (name, email, age, country, balance) VALUES (?, ?, ?, ?, ?)', user1 );
const user2 = ['Vova', 'vova@mail.ru', 10, 'Russia', 100000];
connection.query('INSERT INTO users (name, email, age, country, balance) VALUES (?, ?, ?, ?, ?)', user2 );
const user3 = ['Luba', 'luba@mail.ru', 44, 'Russia', 100000000];
connection.query('INSERT INTO users (name, email, age, country, balance) VALUES (?, ?, ?, ?, ?)', user3 );
const user4 = ['Dima', 'dima@mail.ru', 49, 'Russia', 1000000];
connection.query('INSERT INTO users (name, email, age, country, balance) VALUES (?, ?, ?, ?, ?)', user4 );
const user5 = ['Vasya', 'vasya@mail.ru', 14, 'Russia', 100800];
connection.query('INSERT INTO users (name, email, age, country, balance) VALUES (?, ?, ?, ?, ?)', user5 );

connection.query('SELECT * FROM users');

connection.query('UPDATE users SET name = "Vladimir", age = 11  WHERE id=2')
connection.query('UPDATE users SET name = "Timon", age = 13  WHERE id=5')

connection.query('DELETE FROM users')

connection.end(err => {
    if(err){
        console.log(err);
    }
    else{
        console.log('Подключение закрыто')
    }
})