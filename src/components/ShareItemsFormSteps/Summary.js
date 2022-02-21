import {useContext} from "react";
import {ShareItemsContext} from "../../contextAPI/shareItemsContext";

export const Summary = () => {
    const {formData, setFormData} = useContext(ShareItemsContext);

    return (
        <div className="formWrapper">
            Summary
        </div>
    )
}