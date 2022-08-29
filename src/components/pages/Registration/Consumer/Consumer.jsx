import React from 'react'
import Input from '../../../common/Input/Input'
import './Consumer.scss'

const Consumer = () => {
    return (
        <div className="consumer">
            <h2 className="consumer__heading">
                Регистрация
            </h2>
            <div className="consumer__inputs">
                <Input text={'Фамилия'}/>
                <Input text={'Имя'}/>
                <Input text={'Отчество'}/>
                <Input text={'Электронная почта'}/>
            </div>
        </div>
    )
}

export default Consumer
