import './index.css';
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function List() {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)

  const handleChangen = (event) => {
      setInputValue1(event.target.value);
  };

  const handleChangea = (event) => {
    setInputValue2(event.target.value);
};

  const handleSubmit = (event) => {
      event.preventDefault();
      setNum1(inputValue1);
      setNum2(inputValue2);
      setInputValue1('');
      setInputValue2('');
  };
  let res = 0;
  function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }
  if (!isNumber(num1) || !isNumber(num2)) {
    res = 0;
    console.log('строка')
  }
  else {
    res = Number(num1) + Number(num2)
  };
  console.log(res)
  console.log(num1, num2)
  return (
    <div>
      <h4>Калькулятор</h4>
      <h6>Введите числа</h6>
      <div class="all">
          <form onSubmit={handleSubmit}>
            <div class='numbers'>
              <input type="text" value={inputValue1} onChange={handleChangen} />
              <div>+</div>
              <input type="text" value={inputValue2} onChange={handleChangea} />
            </div>
              <p class='react'>{res}</p>
              <button type="submit">Посчитать</button>
          </form>
      </div>
    </div>
  );
}
const root = createRoot(document.getElementById('root'));
root.render(<List />);