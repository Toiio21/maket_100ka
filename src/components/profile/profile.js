import React from 'react';
import './profile.css';
import backIcon from '../imgs/backIcon.svg';
import searchIcon from '../imgs/searchIcon.svg';
import addIcon from '../imgs/addIcon.svg';
import coinIcon from '../imgs/coinIcon.svg';
import noteIcon from '../imgs/noteIcon.svg';
import profileIcon from '../imgs/profileIcon.svg';
import userProfile from '../imgs/userProfile.svg';
import id from '../imgs/id.svg';
import goalsIcon from '../imgs/goalsIcon.svg';
import { NavLink } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <header className="header">
        <NavLink to={'/enter'}>
          <div className="header-back">
            <img className="header-back-icon" src={backIcon} alt="back Icon" />
            <p className="header-back-text">Назад</p>
          </div>
        </NavLink>
        <div className="header-search">
          <img
            className="header-search-icon"
            src={searchIcon}
            alt="search Icon"
          />
          <input
            className="header-search-input"
            placeholder="Поиск уроков..."
          />
        </div>
        <div className="header-btns">
          <div className="header-add">
            <button className="header-add-button">
              Добавить <br /> курс
            </button>
            <img className="header-add-icon" alt="add Icon" src={addIcon} />
          </div>
          <div className="header-coin">
            <img className="header-coin-icon" alt="coin Icon" src={coinIcon} />
            <p className="header-coin-text">190 коинов</p>
          </div>
        </div>

        <div className="header-notes">
          <div className="header-note">
            <img src={noteIcon} className="header-note-icon" alt="note Icon" />
          </div>
          <div className="header-profile">
            <img
              src={profileIcon}
              className="header-profile-icon"
              alt="note Icon"
            />
          </div>
        </div>
      </header>

      <div className="profile">
        <div className="profile-list">
          <img
            className="profile-list-icon"
            src={userProfile}
            alt="user profile"
          />
          <p className="profile-list-name">Амина</p>
          <div className="profile-list-types">
            <p className="profile-list-types-type">Ученик</p>
            <img className="profile-list-types-icon" src={id} alt="id" />
          </div>
        </div>
        <div className="profile-names">
          <p className="profile-names-naming">Имя и фамилия:</p>
          <p className="profile-names-real">Амина Ефремова</p>
        </div>
        <div className="profile-contacts">
          <div className="profile-contacts-phone">
            <p className="profile-contacts-phone-naming">Телефон:</p>
            <p className="profile-contacts-phone-real">
              &#43;7 (351) 240-04-40
            </p>
          </div>
          <div className="profile-contacts-mail">
            <p className="profile-contacts-mail-naming">Email:</p>
            <p className="profile-contacts-mail-real">amina&#64;gmail.com</p>
          </div>
        </div>
        <div className="profile-birth">
          <p className="profile-birth-naming">Дата рождения:</p>
          <p className="profile-birth-real">28 сентября 2002г</p>
        </div>
      </div>

      <div className="goals">
        <p className="goals-name">Цели</p>
        <div className="goals-items">
          <div className="goals-item">
            <img className="goals-item-icon" src={goalsIcon} alt="goal Icon" />
            <div className="goals-item-col">
              <p className="goals-item-name">Химия</p>
              <div className="goals-item-col-item">
                <p className="goals-item-goal">Цель:</p>
                <p className="goals-item-number">80</p>
              </div>
            </div>
          </div>
          <div className="goals-item">
            <img className="goals-item-icon" src={goalsIcon} alt="goal Icon" />
            <div className="goals-item-col">
              <p className="goals-item-name">Обществознание</p>
              <div className="goals-item-col-item">
                <p className="goals-item-goal">Цель:</p>
                <p className="goals-item-number">80</p>
              </div>
            </div>
          </div>
          <div className="goals-item">
            <img className="goals-item-icon" src={goalsIcon} alt="goal Icon" />
            <div className="goals-item-col">
              <p className="goals-item-name">Английский</p>
              <div className="goals-item-col-item">
                <p className="goals-item-goal">Цель:</p>
                <p className="goals-item-number">80</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact">
        <p className="contact-name">Контактное лицо</p>
        <div className="contact-contacts">
          <div className="contact-contacts-name">
            <p className="contact-contacts-name-naming">ФИО:</p>
            <p className="contact-contacts-name-real">Дональд Трамп</p>
          </div>
          <div className="contact-contacts-phone">
            <p className="contact-contacts-phone-naming">Телефон:</p>
            <p className="contact-contacts-phone-real">
              &#43;7 (351) 240-04-40
            </p>
          </div>
        </div>
      </div>

      <div className="college">
        <p className="college-naming">ВУЗ мечты</p>
        <p className="college-real">Оксфорд</p>
      </div>
    </div>
  );
};

export default Profile;
