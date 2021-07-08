import React from 'react';
import './enter_two.css';
import Logo from '../imgs/Logo.svg';
import { NavLink } from 'react-router-dom';

const EnterTwo = () => {
  return (
    <div className="enter">
      <div className="welcome">
        <img src={Logo} className="welcome-pic" alt="Header Logo" />
        <div className="welcome-text">
          <p className="welcome-text-title">Добро пожаловать!</p>
          <p className="welcome-text-desc">
            Еще чуть-чуть
            <br />
            Осталось выбрать предметы и поставить цели
          </p>
        </div>
      </div>
      <div className="wrapper">
        <p className="form">Заполните формы</p>
        <div className="item">
          <div className="item-wrapper">
            <p className="item-text">Первый предмет</p>
            <select className="item-title">
              <option>Биология</option>
              <option>Обществознание</option>
              <option></option>
              <option></option>
              <option></option>
            </select>
          </div>
          <input type="range" max="100" className="item-card" />
        </div>
        <div className="item">
          <div className="item-wrapper">
            <p className="item-text">Первый предмет</p>
            <select className="item-title">
              <option>Биология</option>
              <option>Обществознание</option>
              <option></option>
              <option></option>
              <option></option>
            </select>
          </div>
          <input type="range" max="100" className="item-card" />
        </div>
        <div className="item">
          <div className="item-wrapper">
            <p className="item-text">Первый предмет</p>
            <select className="item-title">
              <option>Биология</option>
              <option>Обществознание</option>
              <option></option>
              <option></option>
              <option></option>
            </select>
          </div>
          <input type="range" max="100" className="item-card" />
        </div>
        <div className="item">
          <div className="item-wrapper">
            <p className="item-text">Первый предмет</p>
            <select className="item-title">
              <option>Биология</option>
              <option>Обществознание</option>
              <option></option>
              <option></option>
              <option></option>
            </select>
          </div>
          <input type="range" max="100" className="item-card" />
        </div>
        <div className="choice">
          <p>Хочу поступить</p>
          <input className="choice-input" placeholder="МГУ" />
          <div className="check">
            <input type="checkbox" />
            <p className="checkbox-text">На бюджет</p>
          </div>
        </div>
        <NavLink to={'/profile'}>
          <button className="button">На платформу</button>
        </NavLink>
      </div>
    </div>
  );
};

export default EnterTwo;
