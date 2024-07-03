import React, { useEffect, useState } from 'react';
import { User } from '../../interfaces/user.interface';
import { delateUser, getUsers, updateUser } from '../../api/user.api'

export const usersManager = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [getArrUsers, setGetArrUsers] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUsers();
                console.log(data);
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchData();
    }, [getArrUsers]);

    const deleteThisUser = async (id: number) => {
        await delateUser(id);
        setGetArrUsers(!getArrUsers);
    }

    const updateThisUser = (id: number) => {
        const userToUpdate = users.find(user => user._id === id);
        if (userToUpdate) {
            setName(userToUpdate.name);
            setEmail(userToUpdate.email);
            setPassword(userToUpdate.password);
            setSelectedUserId(id);
        }
    };

    const updateUserData = async () => {
        await updateUser(selectedUserId, name, password, email);
        setName('');
        setEmail('');
        setGetArrUsers(!getArrUsers);
        setSelectedUserId(0);
    };

    return (
        <div>
            <h1>All Users</h1>
            <ul>
                {users.map((user) => (
                    <div key={user._id}>
                        {user.isAdmin ? null : ( 
                            <>
                                <strong>Name: </strong> {user.name}
                                <strong>Email: </strong> {user.email}
                                <button onClick={() => deleteThisUser(user._id)}>Delete user</button>
                                <button onClick={() => updateThisUser(user._id)}>Update user</button>
                            </>
                        )}
                    </div>
                ))}
            </ul>
            {selectedUserId !== 0 && (
                <form className="custom-form">
                    <input
                        type="text"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="button" onClick={updateUserData}>OK</button>
                </form>
            )}

        </div>
    );
};

export default usersManager;
