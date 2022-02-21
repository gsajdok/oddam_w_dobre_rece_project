import {ShareItemsContext} from "../contextAPI/shareItemsContext";
import {useContext, useMemo, useState} from "react";
import {StepOne} from "./ShareItemsFormSteps/StepOne";
import {StepTwo} from "./ShareItemsFormSteps/StepTwo";
import {StepThree} from "./ShareItemsFormSteps/StepThree";
import {StepFour} from "./ShareItemsFormSteps/StepFour";
import {UserAuthContext} from "../contextAPI/userAuthContext";
import { get, getDatabase, ref, set } from "firebase/database";


export const ShareItemsForm = () => {
    const {step, setStep, formData} = useContext(ShareItemsContext);
    const [error, setError] = useState(false)
    const [userData] = useContext(UserAuthContext);

    const sendFormData = () => {
        const db = getDatabase();
        set( ref( db, 'submittedForms/' + userData.uid + '/' + Date.now()), {
            formData
        }).then(() => {
            console.log("Success!")
        }).catch((error) => {
            console.log(error)
        })
    }


    const stepHandlerSwitch = (id) => {
        switch(id) {
            case 1:
                return <StepOne/>
            case 2:
                return <StepTwo/>
            case 3:
                return <StepThree/>
            case 4:
                return <StepFour/>
            default:
                return;
        }
    }

    const nextButtonHandler = () => {
        // setError(false)
        // if(step===1) {
        //     if(formData.type===0) {
        //         setError(true)
        //         return false;
        //     }
        // }
        // if(step===2) {
        //     if(formData.amount===0) {
        //         setError(true)
        //         return false;
        //     }
        // }
        // if(step===3) {
        //     if(formData.localisation===0) {
        //         setError(true)
        //         return false;
        //     }
        //     if(formData.helpGroups.every((e) => e===false)) {
        //         setError(true)
        //         return false;
        //     }
        // }
        setStep(step+1);
    }

    const prevButtonHandler = () => {
        setError(false)
        setStep(step-1);
    }

    useMemo(() => {
        if(step>6) {setStep(6)};
        if(step<1) {setStep(1)};
    }, [step])

    return (
        <section className="shareForm">
            <div className="wrapper">
                <div className="content">
                    <div className="stepCountWrapper">
                        {step<=4 && <span>Krok {step}/4</span>}
                    </div>
                    {stepHandlerSwitch(step)}
                    <div className="errorWrapper">
                        {error && "Prosze wypełnić wszystkie wymagane pola!"}
                    </div>
                    <div className="buttonWrapper">
                        {step>1 && <button onClick={prevButtonHandler} className="button button--active">Wstecz</button>}
                        {step<6 && <button onClick={nextButtonHandler} className="button button--active">Dalej</button>}
                        <button onClick={() => console.log(formData)} className="button button--active">Show form data</button>
                        <button onClick={() => console.log(userData)} className="button button--active">Show user data</button>
                        <button onClick={sendFormData} className="button button--active">send what you have to the server</button>
                    </div>
                </div>
            </div>
        </section>
    )
}