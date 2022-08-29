import React, {useState} from 'react';
import CalendarModal from "../CalendarModal/CalendarModal";
import Modal from "../Modal/Modal";

const SearchListItem = () => {
    const [openModal, setOpenModal] = useState(false)
    function modalHandler (e) {
        setOpenModal(!openModal)
    }

    return (
        <div className='list__item' onClick={modalHandler}>
            <img className='list__img' src="https://images.genius.com/0ca9dc470e29b996744cefb1f6ce01b6.955x955x1.jpg" alt="item"/>
            <div className='list__credentials'>
                <h4>Company name</h4>
                <p>Model</p>
                <p>price</p>
            </div>
            <Modal
                shown={openModal}
                close={() => {
                    setOpenModal(false);
                }}
            >
                <CalendarModal/>
            </Modal>
        </div>
    );
};

export default SearchListItem;