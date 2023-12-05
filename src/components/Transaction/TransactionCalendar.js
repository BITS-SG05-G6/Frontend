import { useState } from "react";
import Calendar from 'react-calendar';
import '../../App.css';


function TransactionCalendar() {
    const [value, setValue] = useState(new Date());

    function onChange(nextValue) {
        setValue(nextValue);
    }
    return (
        <div>
            <Calendar
                className="react-calendar" 
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default TransactionCalendar;