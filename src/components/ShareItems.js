import {HomeContact} from "./HomeContact";
import {ShareItemsHeader} from "./ShareItemsHeader";
import {ShareItemsBody} from "./ShareItemsMainBody";
// import {ShareItemsContext} from "../contextAPI/shareItemsContext";
// import {useContext} from "react";

export const ShareItems = () => {
    // const [formData, setFormData, step, setStep] = useContext(ShareItemsContext);

    return (
        <>
            <ShareItemsHeader/>
            <ShareItemsBody/>
            <HomeContact/>
        </>
    )
}