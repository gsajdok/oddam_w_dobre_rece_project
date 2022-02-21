import {useContext} from "react";
import {ShareItemsContext} from "../../contextAPI/shareItemsContext";

export const StepFour = () => {
    const {formData, setFormData} = useContext(ShareItemsContext);


    const onChangeHandler = (e) => {
        switch(e.target.id) {
            case "street":
                setFormData(prevState => ({
                    ...prevState,
                    address: {
                        ...prevState.address,
                        street: e.target.value
                    }
                }));
                break;
            case "city":
                setFormData(prevState => ({
                    ...prevState,
                    address: {
                        ...prevState.address,
                        city: e.target.value
                    }
                }));
                break;
            case "postalCode":
                setFormData(prevState => ({
                    ...prevState,
                    address: {
                        ...prevState.address,
                        postalCode: e.target.value
                    }
                }));
                break;
            case "phoneNumber":
                setFormData(prevState => ({
                    ...prevState,
                    address: {
                        ...prevState.address,
                        phoneNumber: e.target.value
                    }
                }));
                break;
            case "date":
                setFormData(prevState => ({
                    ...prevState,
                    collection: {
                        ...prevState.collection,
                        date: e.target.value
                    }
                }));
                break;
            case "hour":
                setFormData(prevState => ({
                    ...prevState,
                    collection: {
                        ...prevState.collection,
                        hour: e.target.value
                    }
                }));
                break;
            case "comments":
                setFormData(prevState => ({
                    ...prevState,
                    collection: {
                        ...prevState.collection,
                        comments: e.target.value
                    }
                }));
                break;
            default:
                return;
        }
    }

    return (
        <div className="formWrapper">
            <h2>Podaj adres oraz termin odbioru rzeczy przez kuriera</h2>
            <div className="twoColumns">
                <div className="column" style={{display: "flex", flexDirection: "row"}}>
                    <h3>Adres odbioru:</h3>
                    <div className="addressForm">
                        <form>
                            <label>Ulica<input type="text" id="street" value={formData.address.street} onChange={onChangeHandler}/></label>
                            <label>Miasto<input type="text" id="city" value={formData.address.city} onChange={onChangeHandler}/></label>
                            <label>Kod pocztowy<input type="text" id="postalCode" value={formData.address.postalCode} onChange={onChangeHandler}/></label>
                            <label>Numer telefonu<input type="text" id="phoneNumber" value={formData.address.phoneNumber} onChange={onChangeHandler}/></label>
                        </form>
                    </div>
                </div>
                <div className="column">
                    <h3>Termin odbioru:</h3>
                    <div className="contactForm">
                        <form>
                            <label>Data<input type="date" id="date" value={formData.collection.date} onChange={onChangeHandler}/></label>
                            <label>Godzina<input type="time" id="hour" value={formData.collection.hour} onChange={onChangeHandler}/></label>
                            <label>Uwagi do kuriera:<input type="comments" id="comments" value={formData.collection.comments} onChange={onChangeHandler}/></label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}