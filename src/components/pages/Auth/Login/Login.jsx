import React from 'react'
import style from '../Auth.scss'

const Login = () => {
    return (
        <form className={style['login-form']}>
            <label htmlFor="login">Login or email</label>
            <input type="text" name="login" required/>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" required/>

            <input type="submit" value="Submit"/>
        </form>
    )
}

export default Login