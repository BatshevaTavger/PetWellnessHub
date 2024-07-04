
import { ReactNode, createContext, useEffect, useState } from 'react';
import { User } from '../interfaces/user.interface';

export type UserContext = {
    currentUser: User;
    setCurrentUser: (user: User) => void
}

const initialCurrentUser: User = {
    _id: 0,
    name: '',
    password: '',
    email: '',
    isAdmin: true,
};

const InitialContext: UserContext = {
    currentUser: initialCurrentUser,
    setCurrentUser: () => { }
}

export const CurrentContextUser = createContext<UserContext>(InitialContext);

export const CurrentUserProvider = ({ children }: { children: ReactNode }) => {
    const [currentUser, setCurrentUsers] = useState<User>(initialCurrentUser);
    
    useEffect(() => {
        localStorage.setItem('currentUser', JSON.stringify(currentUser))
    }, [currentUser]);

    const setCurrentUser = (user: User) => {
        alert('hii')
        console.log(user, 'in context')
        setCurrentUsers(user);
        console.log(currentUser, 'oioioio')
    }
    
    return (
        <CurrentContextUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentContextUser.Provider>
    );
};