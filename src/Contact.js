import React from 'react';
import { useState } from 'react';
import Navbar from './Navbar';

function List() {
    const [names, setNames] = useState([]);
    const [adress, setAdress] = useState([]);
    const [numbers, setNumbers] = useState([]);
    const [inputValuen, setInputValuen] = useState('');
    const [inputValuea, setInputValuea] = useState('');
    const [inputValuenu, setInputValuenu] = useState('');
  
  
    const handleChangen = (event) => {
        setInputValuen(event.target.value);
    };
  
    const handleChangea = (event) => {
      setInputValuea(event.target.value);
  };
  
    const handleChangenu = (event) => {
      setInputValuenu(event.target.value);
  };
  
    const handleSubmit = (event) => {
        event.preventDefault();
        setNames([...names, inputValuen]);
        setAdress([...adress, inputValuea]);
        setNumbers([...numbers, inputValuenu]);
        setInputValuen('');
        setInputValuea('');
        setInputValuenu('');
    };
  
    return (
        <div>
            <ul>
              Имя
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
            <ul>
              Адрес
                {adress.map((adres, index) => (
                    <li key={index}>{adres}</li>
                ))}
            </ul>
            <ul>
              Телефон
                {numbers.map((number, index) => (
                    <li key={index}>{number}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValuen} onChange={handleChangen} />
                <input type="text" value={inputValuea} onChange={handleChangea} />
                <input type="text" value={inputValuenu} onChange={handleChangenu} />
                <button type="submit">Добавить</button>
            </form>
            <Navbar/>
        </div>
    );
  }
  
  function Contact() {
    return(
    <List/>)
  }
export default Contact;