import React from "react";
import './Modal.scss'

export default function Modal({ children, shown, close }) {
    return shown ? (
        <div
            className="modal-backdrop"
            onClick={() => {
                // close modal when outside of modal is clicked
                close();
            }}
        >
            <div
                className="modal-content"
                onClick={e => {
                    // do not close modal if anything inside modal content is clicked
                    e.stopPropagation();
                }}
            >
                {/*<button onClick={close}>Close</button>*/}
                {children}
            </div>
        </div>
    ) : null;
}
// import React, {useState} from 'react';
// import './Modal.scss'
//
// const Modal = ({active, setActive, children}) => {
//
//     function closeModalHandler (e) {
//         setActive(false)
//     }
//
//     return (
//         <>
//         {active ?
//                 <div className='modal'>
//                     <div className='cross' onClick={closeModalHandler}>cross</div>
//                     {children}
//                 </div>
//                 : null}
//         </>
//     );
// };
//
// export default Modal;
// import React from 'react'
// import './Modal.scss'
//
//
// function Modal({active, setActive, quest }) {
//     return (
//         <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
//             <div className={active ? 'modal__content' : 'modal'} onClick={e => e.stopPropagation()}>
//                 <div id="lalala" className="mb-3">
//                     <label htmlFor="question" className="form-label">{quest}</label>
//                     <input type="text" className="form-control" id="exampleInputName"/>
//                 </div>
//             </div>
//         </div>
//
//     )
// }
//
// export default Modal
