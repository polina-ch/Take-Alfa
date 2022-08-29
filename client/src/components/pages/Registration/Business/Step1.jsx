import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../../../common/Input/Input'

const Step1 = ({nextStepHandler, changeHandler, step}) => {
    return (
        <>
            <div className="business__inputs">
                <h3>Шаг 1/3 Добавьте информацию о компании</h3>
                <p>Должно совпадать с <Link to="#">регистрационными документами последней версии</Link></p>
                <Input
                    text={'Юридическое наименование компании'}
                    description={'Официальное зарегистрированное название.'}
                    type={'text'}
                    setValue={changeHandler}
                    field="legalName"
                    disabled={step !== 1}
                />
                <Input
                    text={'Регистрационный номер компании'}
                    description="Уникальный идентификатор компании, обычно содержится в регистрационных документах  или открытых источниках."
                    type={'digits'}
                    setValue={changeHandler}
                    field="psrn"
                    disabled={step !== 1}
                />
                <Input
                    text={'ИНН'}
                    description={'Идентификационный номер налогоплательщика. Уникальный идентификатор используемый  в налоговой отчетности.'}
                    type="digits"
                    setValue={changeHandler}
                    field="tin"
                    disabled={step !== 1}
                />
                <Input
                    text={'Дата регистрации (необязательно)'}
                    type={'date'}
                    setValue={changeHandler}
                    field="registrationDate"
                    disabled={step !== 1}
                />
                <Input
                    text={'ФИО ген.директора'}
                    type={'text'}
                    setValue={changeHandler}
                    field="ownerName"
                    disabled={step !== 1}
                />
            </div>
            <button
                onClick={() => step > 1 ? nextStepHandler(1) : nextStepHandler(2)}
                className={step > 1
                    ? 'business__next-step _button--green-inactive'
                    : 'business__next-step _button--green'}
            >
                {step > 1 ? 'Редактировать' : 'Продолжить'}
            </button>
        </>
    )
}

export default Step1
