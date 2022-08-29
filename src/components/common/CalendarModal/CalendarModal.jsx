import React, {useState} from 'react';
import './CalendarModal.scss'
import DateRange from "react-date-range/dist/components/DateRange"; // theme css file
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';
// https://github.com/hypeserver/react-date-range
const CalendarModal = () => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    function dateHandler (e) {
        console.log(state)
    }
    return (
        <>
                <div className='calendar-container' onClick={dateHandler}>
                    <DateRange
                        className='calendar'
                        editableDateInputs={true}
                        onChange={item => setState([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={state}
                        months={2}
                        direction={'horizontal'}
                        minDate={new Date()}
                        showDateDisplay={false}
                        rangeColors={['#168738']}
                    />
                    <button className='check-button'>Check</button>
                </div>
        </>
    );
};

export default CalendarModal;