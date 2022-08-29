import React, { useEffect, useState } from 'react'
import EmptyHeader from '../../../UI/EmptyHeader/EmptyHeader'
import './Business.scss'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

const Business = () => {
    const [companyCredentials, setCompanyCredentials] = useState({
        legalName: '',
        psrn: '',
        tin: '',
        registrationDate: '',
        ownerName: '',
        legalStreet: '',
        legalFlat: '',
        legalCity: '',
        legalRegion: '',
        legalPostalCode: '',
        actualRentalAddress: '',
        actualCity: '',
        actualRegion: '',
        actualPostalCode: '',
    })
    const [step, setStep] = useState(1)

    const nextStepHandler = (number) => setStep(number)

    const submitHandler = () => {
        console.log(1)
    }

    useEffect(() => console.log(companyCredentials), [companyCredentials])

    return (
        <>
            <EmptyHeader/>
            <div className="business">
                <nav className="business__header">
                    <ul>
                        <li>Главная</li>
                        <li>
                            {/*TODO CHANGE TO LINK*/}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.5 5L15.5 12L8.5 19" stroke="#200E32" strokeWidth="1.5" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                        </li>
                        <li>Регистрация</li>
                    </ul>
                    <h2 className="business__heading">
                        Регистрация
                    </h2>
                </nav>
                <Step1
                    step={step}
                    nextStepHandler={nextStepHandler}
                    changeHandler={setCompanyCredentials}
                />
                {step >= 2 &&
                    <Step2
                        step={step}
                        nextStepHandler={nextStepHandler}
                        changeHandler={setCompanyCredentials}
                    />
                }
                {step >= 3 &&
                    <Step3
                        changeHandler={setCompanyCredentials}
                        submitHandler={submitHandler}
                    />
                }
            </div>
        </>
    )
}

export default Business
