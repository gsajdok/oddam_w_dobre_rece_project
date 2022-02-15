import React, {useState} from "react";
export const UserAuthContext = React.createContext({});

export const UserAuthProvider = (props) => {
    const [userData, setUserData] = useState([{name: "what"}]);
    return (
        <UserAuthContext.Provider value={[userData, setUserData]}>
            {props.children}
        </UserAuthContext.Provider>
    )
}
