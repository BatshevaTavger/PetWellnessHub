// import React, { createContext, useState } from 'react';

// export const MeetingContext = createContext();

// export const MeetingProvider = ({ children }) => {
//   const [meetingDetails, setMeetingDetails] = useState(null);

//   return (
//     <MeetingContext.Provider value={{ meetingDetails, setMeetingDetails }}>
//       {children}
//     </MeetingContext.Provider>
//   );
// };
// // 

// import React, { createContext, useState } from 'react';

// export const MeetingContext = createContext({ meetingDetails: null, setMeetingDetails: () => {} });

// export const MeetingProvider = ({ children }) => {
//   const [meetingDetails, setMeetingDetails] = useState(null);

//   return (
//     <MeetingContext.Provider value={{ meetingDetails, setMeetingDetails }}>
//       {children}
//     </MeetingContext.Provider>
//   );
// };

import { createContext } from "react";

interface Meeting {
    _id: number;
    userId: number;
    time: string;
    date: string;
    place: string;
    common: string;
}

export type meetingContext = {
    meeting?: Meeting,
}

export const MeetingContext = createContext<meetingContext>({});
