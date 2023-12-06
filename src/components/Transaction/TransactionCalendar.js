import Calendar from 'react-calendar';
import '../../App.css';


function TransactionCalendar({selectedDate, onDateChange}) {
    return (
        <div>
            <Calendar
                className="react-calendar" 
                value={selectedDate}
                onChange={onDateChange}
            />
        </div>
    )
}

export default TransactionCalendar;