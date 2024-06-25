// // import { useContext } from "react";
// // import { useNavigate } from 'react-router-dom';
// // import { UserContext } from "../context/user.context";
// // import { User } from "../interfaces/user.interface";
// // import { Users } from "../data/users.json";

// export const SignUp = () => {

//     // const userContext = useContext(UserContext);
//     // const navigate = useNavigate()

//     // const addUser = (event:any) => {
//     //     event.preventDefault();
//     //     const user: User = {
//     //         firstName: event.target.firstName.value,
//     //         lastName: event.target.lastName.value,
//     //         id: event.target.idNumber.value,
//     //     }
//     //     Users.push(user);
//     //     userContext.setUser(user);
//     //     navigate('/');
//     // }
    
//     return  <div>
//         <h4>Enter new user Details</h4>
//         <form>
//             <input type="text" placeholder="name" name="name" /> <br />
//             <input type="text" placeholder="email" name="email" /> <br />
//             <input type="text" placeholder="password" name="password" /> <br />
//             <button type="submit">Save</button>
//         </form>
//     </div>
// }

import React, { useState } from 'react';
import { register } from '../api/login.api';

export const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const data = await register(name, email, password);
            console.log('Registration successful', data);
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <div>
            <h4>Enter new user Details</h4>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="name" name="name" value={name} onChange={(e) => setName(e.target.value)} /> <br />
                <input type="text" placeholder="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
                <input type="password" placeholder="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default SignUp;
