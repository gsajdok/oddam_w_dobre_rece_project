import React, {useState} from "react";
export const ShareItemsContext = React.createContext({});


export const ShareItemsProvider = (props) => {
    const [formData, setFormData] = useState({
        type: 0,
        amount: 0,
        localisation: 0,
        helpGroups: [false, false, false, false, false],
        groupName: "",
        address: {
            street: "",
            city: "",
            postalCode: "",
            phoneNumber: ""
        },
        collection: {
            date: "",
            hour: "",
            comments: ""
        }
    });
    const [step, setStep] = useState(1);

    return (
        <ShareItemsContext.Provider value={{formData, setFormData, step, setStep}}>
            {props.children}
        </ShareItemsContext.Provider>
    )
}
