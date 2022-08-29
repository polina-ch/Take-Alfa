import React from 'react';

const SearchCalendar = () => {
    return (
        <div>
            <form>
                Выберите дату:
                    <input type="date" name="calendar" value="2012-06-01"
                           max="2012-06-04" min="2012-05-29"/>
                        <input type="submit" value="Отправить"/>
            </form>
        </div>
    );
};

export default SearchCalendar;