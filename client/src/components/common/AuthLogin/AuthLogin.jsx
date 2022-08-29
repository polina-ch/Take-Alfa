import React from 'react'

const AuthLogin = ({authButtonRegister, authButtonLogin, toggleAuth}) => {
    return (
        <>
            <div className="auth__switch-buttons switch-buttons">
                <button
                    onClick={authButtonRegister}
                    className={
                        `switch-buttons__button ${toggleAuth && 'switch-buttons__button--active'}`
                    }>
                    Вход
                </button>
                <button
                    onClick={authButtonLogin}
                    className={
                        `switch-buttons__button ${!toggleAuth && 'switch-buttons__button--active'}`
                    }>
                    Регистрация
                </button>
            </div>
            <div className="auth__inputs">
                <label htmlFor="email">
                    Введите почту
                    <input id="email" type="text" className="auth__input"/>
                </label>
                <label htmlFor="password">
                    Введите пароль
                    <input id="password" type="text" className="auth__input"/>
                </label>
                <div className="auth__button">
                    <button className="_button--green">
                        Войти
                    </button>
                </div>
            </div>
        </>
    )
}

export default AuthLogin
