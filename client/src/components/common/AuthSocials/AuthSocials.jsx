import React from 'react'

const facebook = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/800px-Facebook_Logo_%282019%29.png'
const google = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png'
const vk = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/VK_Compact_Logo.svg/768px-VK_Compact_Logo.svg.png'

const AuthSocials = () => {
    return (
        <div className="auth__social social">
            <div className="social__top">
                или через соц. сети
            </div>
            <div className="social__bottom">
                <div className="social__item">
                    <img src={vk} alt="social" className="auth__social-item--img"/>
                </div>
                <div className="social__item">
                    <img src={google} alt="social" className="auth__social-item--img"/>
                </div>
                <div className="social__item">
                    <img src={facebook} alt="social" className="auth__social-item--img"/>
                </div>
            </div>
        </div>
    )
}

export default AuthSocials
