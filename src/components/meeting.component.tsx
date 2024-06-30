// import React, { useEffect, useState } from 'react';
// import { getMeetings } from '../api/meet.api';

// interface Service {
//     _id: number;
//     userId: number;
//     time: string;
//     date: string;
//     place: string;
// }

// export const Meeting = () => {
//     const [meeting, setMeeting] = useState<Service[]>([]);
//     const [userId, setUserId] = useState<number | null>(null); // Initialize with null

//     useEffect(() => {
//         const storedToken = localStorage.getItem('auth-token');
//         let extractedUserId = null;
//         if (storedToken) {
//             try {
//                 const decodedToken = jwt.decode(storedToken);
//                 extractedUserId = decodedToken._id; // Assuming '_id' is the claim for user ID
//             } catch (error) {
//                 console.error('Error decoding token:', error);
//             }
//         }

//         // Update userId state with extracted ID
//         setUserId(extractedUserId);

//         // Dependency array: [] (empty) - runs only once on component mount
//     }, []);


//     useEffect(() => {
//         const fetchData = async () => {
//             if (userId !== null) {
//                 try {
//                     const data = await getMeetings(userId);
//                     setMeeting(data);
//                 } catch (error) {
//                     console.error('Error fetching services:', error);
//                 }
//             }
//         };

//         fetchData();
//     }, [userId]); // Fetch data only when userId changes
//     // const userId: number = ;


//     // useEffect(() => {
//     //     const fetchData = async () => {
//     //         try {
//     //             const data = await getMeetings(userId);
//     //             setMeeting(data);
//     //         } catch (error) {
//     //             console.error('Error fetching services:', error);
//     //         }
//     //     };
//     //     fetchData();
//     // }, []);

//     return (
//         <div>
//             <h1>your meetings</h1>
//             {meeting ? <ul>
//                 {meeting.map(meeting => (
//                     <div key={meeting._id}>
//                         <h4>Time: {meeting.time} </h4>  <strong>Date:</strong> {meeting.date}, <strong>Place:</strong> {meeting.place}
//                     </div>
//                 ))}
//             </ul> : <h4>אין לך עדיין פגישות</h4>}
//         </div>
//     );
// };

// export default Meeting;
import React, { useEffect, useState } from 'react';
import { getMeetings } from '../api/meet.api';

interface Service {
  _id: number;
  userId: number;
  time: string;
  date: string;
  place: string;
}

export const Meeting = () => {
  const [meeting, setMeeting] = useState<Service[]>([]);
  const userId = localStorage.getItem('userId')||null;

  useEffect(() => {
    const fetchData = async () => {
        console.log(userId);
        
      if (userId != null) {
        try {
          const data = await getMeetings(userId);
          setMeeting(data);
        } catch (error) {
          console.error('Error fetching services:', error);
        }
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div>
      <h1>Your Meetings</h1>
      {meeting.length ? (
        <ul>
          {meeting.map((meeting) => (
            <div key={meeting._id}>
              <h4>Time: {meeting.time}</h4>
              <strong>Date:</strong> {meeting.date}, <strong>Place:</strong>{' '}
              {meeting.place}
            </div>
          ))}
        </ul>
      ) : (
        <h2>You don't have any meetings yet.</h2>
      )}
    </div>
  );
};

export default Meeting;

