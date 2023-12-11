import Calendar from 'react-calendar';
import '../../App.css';


function TransactionCalendar({selectedDate, onDateChange, className}) {
    return (
        <div className={className}>
            <Calendar
                className="react-calendar" 
                value={selectedDate}
                onChange={onDateChange}
            />
        </div>
    )
}

export default TransactionCalendar;