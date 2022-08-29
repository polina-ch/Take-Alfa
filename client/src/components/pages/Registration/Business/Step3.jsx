import React from 'react'
import Input from '../../../common/Input/Input'

const Step3 = ({changeHandler, submitHandler}) => {
    return (
        <>
            <div className="business__inputs">
                <h3>Шаг 3/3 Фактический адрес организации</h3>
                <p>Добавьте один или несколько адресов ваших филиалов. Это поможет эффективно управлять
                    календарем
                    бронирования.</p>
                <Input
                    text={'Фактический адрес проката'}
                    type={'text'}
                    setValue={changeHandler}
                    field="actualRentalAddress"
                />
                <div className="business__checkbox">
                    <input className="custom-checkbox" type="checkbox" id="address"/>
                    <label htmlFor="address"/>
                    <p>Совпадает с юридическим адресом</p>
                </div>
                <Input
                    text={'Город'}
                    type={'text'}
                    setValue={changeHandler}
                    field="actualCity"
                />
                <Input
                    text={'Регион'}
                    type={'text'}
                    setValue={changeHandler}
                    field="actualRegion"
                />
                <Input
                    text={'Почтовый индекс'}
                    type={'digits'}
                    setValue={changeHandler}
                    field="actualPostalCode"
                />
            </div>
            <button
                onClick={submitHandler}
                className="business__next-step _button--green"
            >
                Зарегистрироваться
            </button>
        </>
    )
}

export default Step3
