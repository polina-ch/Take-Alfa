import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../../../common/Input/Input'

const Step2 = ({changeHandler, nextStepHandler, step}) => {
    return (
        <>
            <div className="business__inputs">
                <h3>Шаг 2/3 Добавьте информацию о компании</h3>
                <p>Должно совпадать с <Link to="#">регистрационными документами последней версии</Link></p>
                <Input
                    text={'Улица'}
                    description={'Номер дома/+название улицы'}
                    type={'text'}
                    setValue={changeHandler}
                    field="legalStreet"
                    disabled={step !== 2}
                />
                <Input
                    text={'Квартира (необязательно)'}
                    description={'Квартира, код домофона'}
                    type={'text'}
                    setValue={changeHandler}
                    field="legalFlat"
                    disabled={step !== 2}
                />
                <Input
                    text={'Город'}
                    type={'text'}
                    setValue={changeHandler}
                    field="legalCity"
                    disabled={step !== 2}
                />
                <Input
                    text={'Регион'}
                    type={'text'}
                    setValue={changeHandler}
                    field="legalRegion"
                    disabled={step !== 2}
                />
                <Input
                    text={'Почтовый индекс'}
                    type={'digits'}
                    setValue={changeHandler}
                    field="legalPostalCode"
                    disabled={step !== 2}
                />
            </div>
            <button
                onClick={() => step > 2 ? nextStepHandler(2) : nextStepHandler(3)}
                className={step > 2
                    ? 'business__next-step _button--green-inactive'
                    : 'business__next-step _button--green'}
            >
                {step > 2 ? 'Редактировать' : 'Продолжить'}
            </button>
        </>
    )
}

export default Step2
