import {useContext} from "react";
import {ShareItemsContext} from "../../contextAPI/shareItemsContext";
import {Decoration} from "../Decoration";

export const ThankYou = () => {
    const {formData, setFormData} = useContext(ShareItemsContext);

    return (
        <div className="formWrapper" style={{textAlign: "center"}}>
            <h2>Dziękujemy za przesłanie formularza<br/>Na maila prześlemy wszelkie informacje o odbiorze.</h2>
            <Decoration/>
        </div>
    )
}