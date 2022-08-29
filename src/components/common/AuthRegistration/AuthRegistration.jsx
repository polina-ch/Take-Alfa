import React from 'react'

const AuthRegistration = (
    {
        authButtonRegister,
        authButtonLogin, setChecked,
        checked,
        toggleAuth,
        onClick
    }
) => {
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
                <div className="auth__registration-cards">
                    <div className="auth__registration-card">
                        <input
                            onChange={() => setChecked(1)}
                            checked={checked === 1}
                            type="checkbox"
                            className="auth__checkbox"
                        />
                        <p>Для аренды</p>
                    </div>
                    <div className="auth__registration-card">
                        <input
                            onChange={() => setChecked(2)}
                            checked={checked === 2}
                            type="checkbox"
                            className="auth__checkbox"
                        />
                        <p>Бизнес-аккаунт</p>
                    </div>
                </div>
                <div className="auth__button">
                    <button onClick={onClick} className="_button--green">
                        Регистрация
                    </button>
                </div>
            </div>
        </>
    )
}

export default AuthRegistration
