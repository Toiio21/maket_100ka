import React from 'react';
import './enter.css';
import Logo from '../imgs/Logo.svg';
import { NavLink } from 'react-router-dom';

const Enter = () => {
  return (
    <div className="enter">
      <div className="welcome">
        <img src={Logo} className="welcome-pic" alt="Header Logo" />
        <div className="welcome-text">
          <p className="welcome-text-title">Добро пожаловать!</p>
          <p className="welcome-text-desc">
            Мы уже готовы начать, через мгновение
            <br />
            ты окажешься на нашей платформе, но перед
            <br />
            этим давай познакомимся
          </p>
        </div>
      </div>
      <div className="wrapper">
        <p className="form">Заполните формы</p>
        <div className="form-input">
          <p>Имя и фамилия</p>
          <input className="input" placeholder="Илон Маск" />
        </div>
        <div className="classes">
          <div className="class-section">
            <p>Класс</p>
            <select className="class-select">
              <option>9</option>
              <option>10</option>
              <option>11</option>
            </select>
          </div>
          <div className="class-section">
            <p>Город</p>
            <select className="class-select">
              <option>Казань</option>
              <option>Екатеринбург</option>
              <option>Екатеринбург</option>
            </select>
          </div>
        </div>

        <NavLink to={'/enter'}>
          <button className="button"> Далее</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Enter;
