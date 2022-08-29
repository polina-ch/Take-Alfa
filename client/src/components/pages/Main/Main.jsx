import React from 'react'
import './Main.scss'
import Header from "../../UI/Header/Header";

const Main = () => {
    return (
        <>
            <Header/>
            <div className="main _container">
                <div className="section">
                    <div className="section__left">
                        <h2 className="section__title">
                            Lorem ipsum dolor.
                        </h2>
                        <p className="section__subtitle">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, eaque.
                        </p>
                        <button className="_button--green">
                            Найти
                        </button>
                    </div>
                    <div className="section__right">
                        <img src="assets/images/main__illustration.svg" alt="section image" className="section__img"/>
                    </div>
                </div>
                <div className="categories">
                    <div className="section__title">Lorem ipsum dolor sit amet.</div>
                    <div className="categories__items">
                        <div className="categories__item">
                            <p className="categories__text">
                                Lorem ipsum.
                            </p>
                            <img src="assets/images/illustration=Sport.png" alt="categories__img"
                                 className="categories__img"/>
                        </div>
                        <div className="categories__item">
                            <p className="categories__text">
                                Lorem ipsum.
                            </p>
                            <img src="assets/images/Illustration=Garden.png" alt="categories__img"
                                 className="categories__img"/>
                        </div>
                    </div>
                    <div className="categories__items">
                        <div className="categories__item categories__item--column">
                            <p className="categories__text">
                                Lorem ipsum.
                            </p>
                            <img src="assets/images/Illustration=Technologies.png" alt="categories__img"
                                 className="categories__img"/>
                        </div>
                        <div className="categories__item categories__item--column">
                            <p className="categories__text">
                                Lorem ipsum.
                            </p>
                            <img src="assets/images/Illustration=Travel.png" alt="categories__img"
                                 className="categories__img"/>
                        </div>
                        <div className="categories__item categories__item--column">
                            <p className="categories__text">
                                Lorem ipsum.
                            </p>
                            <img src="assets/images/Illustration=Travel.png" alt="categories__img"
                                 className="categories__img"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
