// import { Link } from "react-router-dom";
// import { MeetingManager } from "./meetingManager.component";

// // let meet: boolean = false;
// // const clickMeet = () => {
// //     meet = true;
// // }

// export const Manager = () => {
//     return (
//         <div>
//             <h3><button><Link to={'./meeting'}>All meeting</Link></button></h3>
//             {/* <button type="submit" onClick={clickMeet()}>AllMeetings</button> */}
//             {/* {meet ? (
//                 <>
//                     <h1>כל הפגישות</h1>
//                     <MeetingManager />
//                 </>
//             ) : null} */}

//         </div>
//     );
// };

// export default Manager;

import { Link } from "react-router-dom";
import { MeetingManager } from "./meetingManager.component";

export const Manager = () => {
    return (
        <div>
            <Link to={'meetingManager'}>All meeting</Link>
        </div>
    );
};

export default Manager;

