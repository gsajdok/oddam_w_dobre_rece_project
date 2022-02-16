import {useContext} from "react";
import {ShareItemsContext} from "../../contextAPI/shareItemsContext";

export const StepOne = () => {
    const {formData, setFormData} = useContext(ShareItemsContext);

    const onChangeValue = (e) => {
        console.log(e.target.value)
        setFormData(prevState => ({
            ...prevState,
            type: parseInt(e.target.value)
        }));
    }

    return (
        <div className="formWrapper">
            <h2>Zaznacz co chcesz oddać:</h2>
            <form id="form">
                <label><input type="radio" name="type" value="1" checked={formData.type===1} onChange={onChangeValue}/>ubrania, które nadają się do ponownego użycia</label>
                <label><input type="radio" name="type" value="2" checked={formData.type===2} onChange={onChangeValue}/>ubrania do wyrzucenia</label>
                <label><input type="radio" name="type" value="3" checked={formData.type===3} onChange={onChangeValue}/>zabawki</label>
                <label><input type="radio" name="type" value="4" checked={formData.type===4} onChange={onChangeValue}/>książki</label>
                <label><input type="radio" name="type" value="5" checked={formData.type===5} onChange={onChangeValue}/>inne</label>
            </form>
        </div>
    )
}