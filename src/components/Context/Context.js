import { createContext, useEffect, useState } from 'react';

export const RideContext = createContext();

export const RideContextProvider = (props) => {
    const [userInformation, setUserInformation] = useState({});
    const [userLogin, setUserLogin] = useState(false);

    useEffect(() => {
        userInformation?.isLoggedIn ? setUserLogin(true) : setUserLogin(false);
    }, [userInformation]);

    const ContextInfo = {
        userInformation,
        setUserInformation,
        userLogin,
    };
    return (
        <RideContext.Provider value={ContextInfo}>
            {props.children}
        </RideContext.Provider>
    );
};
