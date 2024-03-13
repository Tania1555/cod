import './index.css';
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function List() {
  const [inputValuen, setInputValuen] = useState('');
  const [inputValuep, setInputValuep] = useState('');
  const [users, setUsers] = useState([])
  const [ans, setAns] = useState('')

  const handleChangen = (event) => {
      setInputValuen(event.target.value);
      setAns('');
  };

  const handleChangep = (event) => {
    setInputValuep(event.target.value);
    setAns('')
};

  /*function Object() {
    let obj = {
      name: inputValuen,
      pass: inputValuep
    }
    setUsers([...users, obj])
  }*/

  const handleSubmit = (event) => {
      event.preventDefault();
      let obj = {
        name: inputValuen,
        pass: inputValuep
      }
      console.log(users.map(({ name }) => name), obj.name)
      console.log(users.map(({ name }) => name).includes(obj.name))
      if (!users.map(({ name }) => name).includes(obj.name)) {
        setUsers([...users, obj])
        setInputValuen('');
        setInputValuep('');
        setAns('Пользователь успешно добавлен');
        console.log(ans);
        }
      else {
        setAns('Пользователь с таким ником уже существует');
        console.log(ans);
      }
  }
  console.log(ans)
  let result = users.map((user, index) => {
		return <p key={index}>
      Имя: {user.name}, Пароль: {user.pass}
		</p>;
	});

  console.log(users)
  console.log(result)
  return (
      <div class='all'>
          <div class='list'>
            <h2>Список пользователей</h2>
            {result}
            </div>
          <form onSubmit={handleSubmit}>
              <h2>Добавить пользователя</h2>
              <input type="text" placeholder="Введите ник пользователя" value={inputValuen} onChange={handleChangen} />
              <input type="password" placeholder="Придумайте пароль" value={inputValuep} onChange={handleChangep} />
              <button type="submit">Добавить</button>
              <p class='ans'>{ans}</p>
          </form>
      </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<List />);
