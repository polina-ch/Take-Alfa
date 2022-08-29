import React, { useState } from 'react'
import './Input.scss'

const Input = ({text, type, description, setValue, field, disabled = false}) => {
    const [inputValue, setInputValue] = useState('')

    function inputHandler(e) {
        setInputValue(e.target.value)
        setValue(prev => {
            return {...prev, [field]: e.target.value}
        })
    }

    function digitsHandler(e) {
        const regex = /^[0-9\b]+$/
        if (e.target.value === '' || regex.test(e.target.value)) {
            setInputValue(e.target.value)
            setValue(prev => {
                return {...prev, [`${field}`]: e.target.value}
            })
        }
    }

    return (
        <label className="label" htmlFor={text}>
            <h4>{text}</h4>
            {description ? <p>{description}</p> : null}
            {type === 'digits' && <input
                onChange={digitsHandler}
                id={text}
                type={type}
                className={disabled ? 'input--disabled' : 'input'}
                placeholder={text}
                value={inputValue}
                required
                disabled={disabled}
            />}
            {type === 'text' && <input
                onChange={inputHandler}
                id={text}
                type={type}
                placeholder={text}
                className={disabled ? 'input--disabled' : 'input'}
                required
                value={inputValue}
                disabled={disabled}
            />}
            {type === 'date' && <input
                id={text}
                type={type}
                onChange={inputHandler}
                value={inputValue}
                disabled={disabled}
                className={disabled ? 'input--disabled' : 'input'}
            />}

        </label>
    )
}

export default Input
