import {ShareItemsContext} from "../contextAPI/shareItemsContext";
import {useContext, useMemo, useState} from "react";
import {StepOne} from "./ShareItemsFormSteps/StepOne";
import {StepTwo} from "./ShareItemsFormSteps/StepTwo";

export const ShareItemsForm = () => {
    const {step, setStep, formData} = useContext(ShareItemsContext);

    const stepHandlerSwitch = (id) => {
        switch(id) {
            case 1:
                return <StepOne/>
            case 2:
                return <StepTwo/>
            default:
                return;
        }
    }

    return (
        <section className="shareForm">
            <div className="wrapper">
                <div className="content">
                    <div className="stepCountWrapper">
                        <span>Krok {step}/4</span>
                    </div>
                    {stepHandlerSwitch(step)}
                    <div className="buttonWrapper">
                        {step>1 && <button onClick={() => setStep(step - 1)} className="button button--active">Wstecz</button>}
                        {step<4 && <button onClick={() => setStep(step + 1)} className="button button--active">Dalej</button>}
                        <button onClick={() => console.log(formData)} className="button button--active">Show form data</button>
                    </div>
                </div>
            </div>
        </section>
    )
}