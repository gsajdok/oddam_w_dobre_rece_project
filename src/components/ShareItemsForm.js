import {ShareItemsContext} from "../contextAPI/shareItemsContext";
import {useContext, useMemo, useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../helpers/firebase";
import { getFirestore } from 'firebase/firestore'
import { doc, setDoc } from "firebase/firestore";

import {StepOne} from "./ShareItemsFormSteps/StepOne";
import {StepTwo} from "./ShareItemsFormSteps/StepTwo";
import {StepThree} from "./ShareItemsFormSteps/StepThree";
import {StepFour} from "./ShareItemsFormSteps/StepFour";
import {Summary} from "./ShareItemsFormSteps/Summary";
import {ThankYou} from "./ShareItemsFormSteps/ThankYou";

export const ShareItemsForm = () => {
    const {step, setStep, formData} = useContext(ShareItemsContext);
    const [user] = useAuthState(auth)
    const [isError, setError] = useState(false);

    const sendData = () => {
        const db = getFirestore();
        const timestamp = Date.now().toString();

        setDoc(doc(db, `submittedData/forms/${user.uid}`, timestamp), {...formData, timestamp: Date.now()}).then(() => {
                console.log("Success!")
                setStep(6);
            }).catch((error) => {
                console.log(error)
            })

    }

    const validateFormOnStep = (stepNumber) => {
        setError(false);
        if(stepNumber===1) {
            if(formData.type===0) {setError(true); return false;}
        } else
        if(stepNumber===2) {
            if(formData.amount===0) {setError(true); return false;}
        } else
        if(stepNumber===3) {
            if(formData.localisation===0 || formData.helpGroups.indexOf(true)===-1) {setError(true); return false;}
        } else
        if(stepNumber===4) {
            if(Object.entries(formData.address).indexOf("")!==-1 || formData.collection.date==="" || formData.collection.hour==="") {setError(true); return false;}
        }
        return true;
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
            case 5:
                return <Summary/>
            case 6:
                return <ThankYou/>
            default:
                return;
        }
    }

    const nextButtonHandler = () => {
        if(validateFormOnStep(step)) {
            setStep(step+1);
        }
    }

    const prevButtonHandler = () => {
        setStep(step-1);
    }

    useMemo(() => {
        if(step>6) {setStep(6)}
        if(step<1) {setStep(1)}
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
                        {isError && <h2 style={{color: "red"}}>Prosze wypełnić wszystkie wymagane pola!</h2>}
                    </div>
                    <div className="buttonWrapper">
                        {step>1 && step<=5 && <button onClick={prevButtonHandler} className="button button--active">Wstecz</button>}
                        {step<5 && <button onClick={nextButtonHandler} className="button button--active">Dalej</button>}
                        {step===5 && <button onClick={sendData} className="button button--active">Potwierdzam</button>}
                    </div>
                </div>
            </div>
        </section>
    )
}