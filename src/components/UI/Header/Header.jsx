import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import profileIcon from '../../../assets/icons/profile.svg'
import Logo from "../../common/Logo/Logo";

const Header = () => {
    return (
        <header className="header">
            <Logo widthLogo='400'/>
            <div className="header__search">
                <input
                    placeholder="Аренда сноуборда"
                    className="header__input"
                    type="text"
                />
                <button className="_button--green">
                    <img src="assets/icons/search.svg" alt="auth icon"/>
                </button>
            </div>
            <div className="header__auth">
                <p>Вход или регистрация</p>
                <Link to={'/auth'}>
                    <img src={profileIcon} alt="auth icon"/>
                </Link>
            </div>
        </header>
    )
}

export default Header
