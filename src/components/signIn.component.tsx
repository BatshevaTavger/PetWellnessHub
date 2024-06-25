// // import { UserContext } from "../context/user.context";
// // import { useContext } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { Users } from "../data/users.json";

// export const SignIn = () => {

//     // const userContext = useContext(UserContext);
//     // const navigate = useNavigate();

//     // const connectUser = (event: any) => {
//     //     event.preventDefault();
//     //     const name = event.target.firstName.value;
//     //     const id = event.target.idNumber.value;
//     //     const userexisting = Users.find(user => user.firstName == name && user.id == id)
//     //     if (!userexisting) {
//     //         navigate('/sign-up');
//     //     }
//     //     else {
//     //         userContext.setUser(userexisting);
//     //         navigate('/product');
//     //     }
//     // }

//     return <div>
//         <h1>SignIn</h1>
//         <form>
//             <input type="text" placeholder="name" name="name" /> <br />
//             <input type="text" placeholder="email" name="email" /> <br />
//             <button type="submit">Connect</button>
//         </form>
//     </div>
// }
// export default SignIn;

// import React, { useState } from 'react';
// import { login } from '../api/login.api';

// export const SignIn = () => {
//     const [name, setName] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = async (e: any) => {
//         e.preventDefault();
//         try {
//             const data = await login(name, password);
//             console.log('Login successful', data);
//         } catch (error) {
//             console.error('Login failed', error);
//         }
//     };

//     return (
//         <div>
//             <h1>SignIn</h1>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" placeholder="name" name="name" value={name} onChange={(e) => setName(e.target.value)} /> <br />
//                 <input type="password" placeholder="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
//                 <button type="submit">Connect</button>
//             </form>
//         </div>
//     );
// };

// export default SignIn;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/login.api';

export const SignIn = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const data = await login(name, password);
            console.log('Login successful', data);
            navigate('/'); // מעביר לדף הבית לאחר התחברות תקינה
        } catch (error) {
            console.error('Login failed', error);
            alert('Login failed: ' + error); // מציג הודעת שגיאה
        }
    };

    return (
        <div>
            <h1>SignIn</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="name" name="name" value={name} onChange={(e) => setName(e.target.value)} /> <br />
                <input type="password" placeholder="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
                <button type="submit">Connect</button>
            </form>
        </div>
    );
};

export default SignIn;
