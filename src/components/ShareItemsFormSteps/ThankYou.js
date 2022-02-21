import {useContext} from "react";
import {ShareItemsContext} from "../../contextAPI/shareItemsContext";

export const ThankYou = () => {
    const {formData, setFormData} = useContext(ShareItemsContext);

    return (
        <div className="formWrapper">
            ThankYou
        </div>
    )
}