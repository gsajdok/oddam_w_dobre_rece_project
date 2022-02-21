import {useContext} from "react";
import {ShareItemsContext} from "../../contextAPI/shareItemsContext";

export const StepFour = () => {
    const {formData, setFormData} = useContext(ShareItemsContext);

    const onChangeHandlerAddress = (e) => {
        setFormData({
            ...formData,
            address: {
                ...formData.address,
                [e.target.name]: e.target.value
            }
        })
    }

    const onChangeHandlercollection = (e) => {
        setFormData({
            ...formData,
            collection: {
                ...formData.collection,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <div className="formWrapper">
            <h2>Podaj adres oraz termin odbioru rzeczy przez kuriera</h2>
            <div className="twoColumns">
                <div className="column">
                    <h3>Adres odbioru:</h3>
                    <div className="addressForm">
                        <form>
                            <label>Ulica<input type="text" name="street" value={formData.address.street} onChange={onChangeHandlerAddress}/></label>
                            <label>Miasto<input type="text" name="city" value={formData.address.city} onChange={onChangeHandlerAddress}/></label>
                            <label>Kod pocztowy<input type="text" name="postalCode" value={formData.address.postalCode} onChange={onChangeHandlerAddress}/></label>
                            <label>Numer telefonu<input type="text" name="phoneNumber" value={formData.address.phoneNumber} onChange={onChangeHandlerAddress}/></label>
                        </form>
                    </div>
                </div>
                <div className="column">
                    <h3>Termin odbioru:</h3>
                    <div className="collectionForm">
                        <form>
                            <label>Data<input type="date" name="date" value={formData.collection.date} onChange={onChangeHandlercollection}/></label>
                            <label>Godzina<input type="time" name="hour" value={formData.collection.hour} onChange={onChangeHandlercollection}/></label>
                            <label>Uwagi do kuriera:<textarea name="comments" value={formData.collection.comments} onChange={onChangeHandlercollection}/></label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}