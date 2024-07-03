// const Update = () => {
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label>תאריך:</label>
//                 <input type="date" value={selectedDate.toISOString().substring(0, 10)} onChange={handleDateChange} />
//                 <br />

//                 <label>שעה:</label>
//                 <input type="time" value={selectedTime} onChange={handleTimeChange} />
//                 <br />

//                 <label>מיקום:</label>
//                 <select value={selectedLocation} onChange={handleLocationChange}>
//                     <option value="">בחר מיקום</option>
//                     <option value="סניף 1">סניף 1</option>
//                     <option value="סניף 2">סניף 2</option>
//                     <option value="סניף 3">סניף 3</option>
//                 </select>

//                 <button type="submit">לעדכון</button>
//             </form>
//         </div>
//     );
// };

// export default Update;

import React, { useState } from 'react';

const Update = (props) => {
    // const initialDate = props.date; // Initial date value
    // const initialTime = props.time; // Initial time value
    // const initialLocation = props.place; // Initial location value

    // const [selectedDate, setSelectedDate] = useState(initialDate);
    // const [selectedTime, setSelectedTime] = useState(initialTime);
    // const [selectedLocation, setSelectedLocation] = useState(initialLocation);


    // const handleDateChange = (e) => {
    //     setSelectedDate(e.target.value);
    // };

    // const handleTimeChange = (e) => {
    //     setSelectedTime(e.target.value);
    // };

    // const handleLocationChange = (e) => {
    //     setSelectedLocation(e.target.value);
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Add your form submission logic here
    // };
    const meetingId = props;

    return (
        <div>
            meetingId
            {meetingId}
            {/* <form onSubmit={handleSubmit}>
                <label>Date:</label>
                <input type="date" value={selectedDate} onChange={handleDateChange} />
                <br />

                <label>Time:</label>
                <input type="time" value={selectedTime} onChange={handleTimeChange} />
                <br />

                <label>Location:</label>
                <select value={selectedLocation} onChange={handleLocationChange}>
                    <option value="">Select location</option>
                    <option value="branch 1">branch 1</option>
                    <option value="branch 2">branch 2</option>
                    <option value="branch 3">branch 3</option>
                </select>

                <button type="submit">for update</button>
            </form> */}
        </div>
    );
};

export default Update;

