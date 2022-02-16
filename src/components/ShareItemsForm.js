import {ShareItemsContext} from "../contextAPI/shareItemsContext";
import {useContext, useMemo, useState} from "react";
import {StepOne} from "./ShareItemsFormSteps/StepOne";
import {StepTwo} from "./ShareItemsFormSteps/StepTwo";

export const ShareItemsForm = () => {
    const {step, setStep, formData} = useContext(ShareItemsContext);
    const [error, setError] = useState(false)

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

    const nextButtonHandler = () => {
        setError(false)
        if(step===1) {
            if(formData.type===0) {
                setError(true)
                return false;
            }
        }
        if(step===2) {
            if(formData.amount===0) {
                setError(true)
                return false;
            }
        }
        setStep(step+1);
    }

    const prevButtonHandler = () => {
        setError(false)
        setStep(step-1);
    }

    useMemo(() => {
        if(step>4) {setStep(4)};
        if(step<1) {setStep(1)};
    }, [step])

    return (
        <section className="shareForm">
            <div className="wrapper">
                <div className="content">
                    <div className="stepCountWrapper">
                        <span>Krok {step}/4</span>
                    </div>
                    {stepHandlerSwitch(step)}
                    <div className="errorWrapper">
                        {error && "Prosze wypełnić wszystkie wymagane pola!"}
                    </div>
                    <div className="buttonWrapper">
                        {step>1 && <button onClick={prevButtonHandler} className="button button--active">Wstecz</button>}
                        {step<4 && <button onClick={nextButtonHandler} className="button button--active">Dalej</button>}
                        <button onClick={() => console.log(formData)} className="button button--active">Show form data</button>
                    </div>
                </div>
            </div>
        </section>
    )
}