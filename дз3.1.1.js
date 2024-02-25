const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'work2',
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
const user6 = ['Tima', 'tima@mail.ru', 12, 'Russia', 19000];
connection.query('INSERT INTO users (name, email, age, country, balance) VALUES (?, ?, ?, ?, ?)', user6 );
const user7 = ['Artem', 'Artem@mail.ru', 13, 'Russia', 50000];
connection.query('INSERT INTO users (name, email, age, country, balance) VALUES (?, ?, ?, ?, ?)', user7 );
const user8 = ['Alisa', 'alisa@mail.ru', 15, 'Russia', 12000];
connection.query('INSERT INTO users (name, email, age, country, balance) VALUES (?, ?, ?, ?, ?)', user8 );
const user9 = ['Anna', 'anna@mail.ru', 17, 'Russia', 14000];
connection.query('INSERT INTO users (name, email, age, country, balance) VALUES (?, ?, ?, ?, ?)', user9 );
const user10 = ['Arina', 'arina@mail.ru', 19, 'Russia', 17000];
connection.query('INSERT INTO users (name, email, age, country, balance) VALUES (?, ?, ?, ?, ?)', user10 );

connection.query('SELECT * FROM users WHERE id=3 OR id=7');

connection.query('UPDATE users SET name = "Vladimir", age = 11  WHERE id=2')
connection.query('UPDATE users SET name = "Timon", age = 13  WHERE id=6')

connection.query('DELETE FROM users WHERE id=8')

connection.query('SELECT * FROM users')

connection.end(err => {
    if(err){
        console.log(err);
    }
    else{
        console.log('Подключение закрыто')
    }
})