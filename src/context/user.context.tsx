// import React, { createContext, useState } from 'react';


// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     return (
//         <UserContext.Provider value={{ user, setUser }}>
//             {children}
//         </UserContext.Provider>
//     );
// };

// ------------ 

// import { createContext, useState } from "react";
// import { User } from "../interfaces/user.interface";

// interface UserContextValue {
//   user: User | null;
//   setUser: (userName: string|null, userId: number|null) => void;
// }

// export const UserContext = createContext<UserContextValue>(null);

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState<User | null>(null); // Specify initial user type

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
