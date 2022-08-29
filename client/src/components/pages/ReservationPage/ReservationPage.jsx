import React from "react"
import similarUnitUrl from "../../../aDELETEimages/reserve_similar.jpg"
import sliderUnitUrl from "../../../aDELETEimages/reserve_slider_test.png"
import Header from "../../UI/Header/Header"
import "./ReservationPage.scss"
import RoutingNavPanel from "../../UI/RoutingNavPanel/RoutingNavPanel"

const ReservationPage = () => {
  return (
    <>
      <Header />
      <main className="main-container">
        <div className="reservation-wrap">

          <section className="reservation-wrap__item-details item-credentials">
            <RoutingNavPanel />
            <div className="item-credentials__header">
              <h2>Bike: Stark</h2>
            </div>
            <img className="item-credentials__slider" src={sliderUnitUrl} alt="test" />
            <div className="item-credentials__description about-item">
              <ul className="about-item__navigation">
                <li className="about-item__navigation__nav-item">Описание товара</li>
                <li className="about-item__navigation__nav-item">Доставка и возврат</li>
                <li className="about-item__navigation__nav-item">Характеристики</li>
              </ul>
              <div className="about-item__info">
                Велосипед подойдет как для взрослых, так и для подростков. 24 скорости, тормоза в отличном состоянии,
                мягкий. Велосипед подойдет как для взрослых, так и для подростков. 24 скорости, тормоза в отличном
                состоянии, мягкий. Велосипед подойдет как для взрослых, так и для подростков. 24 скорости, тормоза в
                отличном состоянии, мягкий.
              </div>
            </div>
            <div className="item-credentials__similar similar">
              <h3 className="similar__header">Похожие варианты</h3>
              <ul className="similar__item-list">
                <li className="similar__item">
                  <img className="similar__item__img"
                       src={similarUnitUrl} alt="img" />
                  <div className="similar__item__info">
                    <p>Аренда горного велосипеда Aspect Stimul 20quot</p>
                    <p>200 Р час</p>
                  </div>
                </li>
                <li className="similar__item">
                  <img className="similar__item__img"
                       src={similarUnitUrl} alt="img" />
                  <div className="similar__item__info">
                    <p>Аренда горного велосипеда Aspect Stimul 20quot</p>
                    <p>200 Р час</p>
                  </div>
                </li>
                <li className="similar__item">
                  <img className="similar__item__img"
                       src={similarUnitUrl} alt="img" />
                  <div className="similar__item__info">
                    <p>Аренда горного велосипеда Aspect Stimul 20quot</p>
                    <p>200 Р час</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="item-credentials__popular popular">
              <h3 className="popular__header">Популярно сегодня</h3>
              <ul className="popular__item-list">
                <li className="popular__item">
                  <img className="popular__item__img"
                       src={similarUnitUrl} alt="img" />
                  <div className="popular__item__info">
                    <p>Аренда горного велосипеда Aspect Stimul 20quot</p>
                    <p>200 Р час</p>
                  </div>
                </li>
                <li className="popular__item">
                  <img className="popular__item__img"
                       src={similarUnitUrl} alt="img" />
                  <div className="popular__item__info">
                    <p>Аренда горного велосипеда Aspect Stimul 20quot</p>
                    <p>200 Р час</p>
                  </div>
                </li>
                <li className="popular__item">
                  <img className="popular__item__img"
                       src={similarUnitUrl} alt="img" />
                  <div className="popular__item__info">
                    <p>Аренда горного велосипеда Aspect Stimul 20quot</p>
                    <p>200 Р час</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className="reservation-wrap__book-details book-options">
            <div className="book-options__condition">
              700 Р/ 1 день аренды
            </div>
            <div className="book-options__dates">
              <div className="book-options__date-picker">
                <p>начало</p>
                <p>Укажите дату</p>
              </div>
              <div className="book-options__date-picker">
                <p>конец</p>
                <p>Укажите дату</p>
              </div>
            </div>

            <button className="book-options__reserve-button">Запросить аренду</button>

            <div className="book-options__summary summary">
              <div className="summary__option">
                <p>
                  Сумма залога
                </p>
                <p>
                  200 P
                </p>
              </div>
              <div className="summary__option">
                <p>Сбор за услуги Take</p>
                <p>3%</p>
              </div>
            </div>
          </section>
        </div>

      </main>
    </>
  )
}

export default ReservationPage