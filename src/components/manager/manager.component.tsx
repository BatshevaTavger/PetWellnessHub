import { Link } from "react-router-dom";

export const Manager = () => {
    return (
        <div>
            <Link to={'meetingManager'}>All meeting</Link>
            <br />
            <Link to={'servicesManager'}>All services</Link>
            <br />
            <Link to={'usersManager'}>All users</Link>
        </div>
    );
};

export default Manager;

