import {useContext} from "react";
import {ShareItemsContext} from "../../contextAPI/shareItemsContext";

export const StepTwo = () => {
    const {formData, setFormData} = useContext(ShareItemsContext);

    const onChangeValue = (e) => {
        console.log(e.target.value)
        setFormData(prevState => ({
            ...prevState,
            amount: parseInt(e.target.value)
        }));
    }

    return (
        <div className="formWrapper">
            <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
            <div className="selectForm">
                <form>
                    <label>Liczba 60l worków:
                        <select name="amount" onChange={onChangeValue} value={formData.amount}>
                            <option value="0" disabled hidden>--- wybierz ---</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>
                </form>
            </div>
        </div>
    )
}