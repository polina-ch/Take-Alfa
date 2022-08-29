import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AuthLogin from '../../common/AuthLogin/AuthLogin'
import AuthRegistration from '../../common/AuthRegistration/AuthRegistration'
import AuthSocials from '../../common/AuthSocials/AuthSocials'
import './Auth.scss'
import Logo from "../../common/Logo/Logo";

const Auth = () => {
    const dispatch = useDispatch()
    const [toggleAuth, setToggleAuth] = useState(true)
    const [checked, setChecked] = useState(0)
    const navigate = useNavigate()

    const onRegistration = () => {
        checked === 1 && navigate('/auth/registration/consumer')
        checked === 2 && navigate('/auth/registration/company')
    }

    function authButtonLogin() {
        setToggleAuth(false)
    }

    function authButtonRegister() {
        setToggleAuth(true)
    }

    return (
        <div className="auth">
            <section className="auth__card">
                <div className="auth__logo">
                    <Logo widthLogo='400'/>
                </div>
                {toggleAuth
                    ?
                    <AuthLogin
                        authButtonLogin={authButtonLogin}
                        authButtonRegister={authButtonRegister}
                        toggleAuth={toggleAuth}
                    />
                    :
                    <AuthRegistration
                        checked={checked}
                        setChecked={setChecked}
                        toggleAuth={toggleAuth}
                        onClick={onRegistration}
                        authButtonLogin={authButtonLogin}
                        authButtonRegister={authButtonRegister}
                    />}
                <AuthSocials/>
            </section>
        </div>
    )
}

export default Auth
