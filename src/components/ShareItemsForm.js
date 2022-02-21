import {ShareItemsContext} from "../contextAPI/shareItemsContext";
import {useContext, useMemo, useState} from "react";
import {StepOne} from "./ShareItemsFormSteps/StepOne";
import {StepTwo} from "./ShareItemsFormSteps/StepTwo";
import {StepThree} from "./ShareItemsFormSteps/StepThree";
import {StepFour} from "./ShareItemsFormSteps/StepFour";
import { get, getDatabase, ref, set } from "firebase/database";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../helpers/firebase";
import {Summary} from "./ShareItemsFormSteps/Summary";
import {ThankYou} from "./ShareItemsFormSteps/ThankYou";


export const ShareItemsForm = () => {
    const {step, setStep, formData} = useContext(ShareItemsContext);
    const [user] = useAuthState(auth)

    // const sendFormData = () => {
    //     const db = getDatabase();
    //     set( ref( db, 'submittedForms/' + userData.uid + '/' + Date.now()), {
    //         formData
    //     }).then(() => {
    //         console.log("Success!")
    //     }).catch((error) => {
    //         console.log(error)
    //     })
    // }


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
        setStep(step+1);
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
                    </div>
                    <div className="buttonWrapper">
                        {step>1 && <button onClick={prevButtonHandler} className="button button--active">Wstecz</button>}
                        {step<6 && <button onClick={nextButtonHandler} className="button button--active">Dalej</button>}
                    </div>
                </div>
            </div>
        </section>
    )
}