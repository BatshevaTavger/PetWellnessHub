// import { useContext } from "react";
// import { useNavigate } from 'react-router-dom';
// import { UserContext } from "../context/user.context";
// import { User } from "../interfaces/user.interface";
// import { Users } from "../data/users.json";

export const SignUp = () => {

    // const userContext = useContext(UserContext);
    // const navigate = useNavigate()

    // const addUser = (event:any) => {
    //     event.preventDefault();
    //     const user: User = {
    //         firstName: event.target.firstName.value,
    //         lastName: event.target.lastName.value,
    //         id: event.target.idNumber.value,
    //     }
    //     Users.push(user);
    //     userContext.setUser(user);
    //     navigate('/');
    // }
    
    return  <div>
        <h4>Enter new user Details</h4>
        <form>
            <input type="text" placeholder="name" name="name" /> <br />
            <input type="text" placeholder="email" name="email" /> <br />
            <input type="text" placeholder="password" name="password" /> <br />
            <button type="submit">Save</button>
        </form>
    </div>
}