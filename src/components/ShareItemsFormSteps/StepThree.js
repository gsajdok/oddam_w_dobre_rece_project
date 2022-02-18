import {useContext} from "react";
import {ShareItemsContext} from "../../contextAPI/shareItemsContext";

export const StepThree = () => {
    const {formData, setFormData} = useContext(ShareItemsContext);

    const onChangeValue = (e) => {
        if(e.target.name==="localisation") {
            setFormData(prevState => ({
                ...prevState,
                localisation: parseInt(e.target.value)
            }));
        }
    }

    const onClickValue = (e) => {
        let optionsArrayCopy = formData.helpGroups;
        optionsArrayCopy.splice(parseInt(e.target.value), 1, !optionsArrayCopy[parseInt(e.target.value)]);
        setFormData(prevState => ({
            ...prevState,
            helpGroups: optionsArrayCopy
        }));
    }

    const textInputChangeHandler = (e) => {
        setFormData(prevState => ({
            ...prevState,
            groupName: e.target.value
        }));
    }

    return (
        <div className="formWrapper">
            <h2>Lokalizacja:</h2>
            <form id="form">
                <label>
                    <select style={{marginLeft: 0}} name="localisation" onChange={onChangeValue} value={formData.localisation}>
                        <option value="0" disabled hidden>--- wybierz ---</option>
                        <option value="1">Poznań</option>
                        <option value="2">Warszawa</option>
                        <option value="3">Kraków</option>
                        <option value="4">Wrocław</option>
                        <option value="5">Katowice</option>
                    </select>
                </label>
            </form>
            <div className="helpGroupsForm">
                <h2>Komu chcesz pomóc?</h2>
                <div className="helpGroupsButtons">
                    <button value="0" className={`button button--active ${formData.helpGroups[0] && "button--toggled"}`} onClick={onClickValue}>dzieciom</button>
                    <button value="1" className={`button button--active ${formData.helpGroups[1] && "button--toggled"}`} onClick={onClickValue}>samotnym matkom</button>
                    <button value="2" className={`button button--active ${formData.helpGroups[2] && "button--toggled"}`} onClick={onClickValue}>bezdomnym</button>
                    <button value="3" className={`button button--active ${formData.helpGroups[3] && "button--toggled"}`} onClick={onClickValue}>niepełnosprawnym</button>
                    <button value="4" className={`button button--active ${formData.helpGroups[4] && "button--toggled"}`} onClick={onClickValue}>osobom starszym</button>
                </div>
            </div>
            <div className="customGroupForm">
                <h2>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h2>
                <input type="text" value={formData.groupName} onChange={textInputChangeHandler}/>
            </div>
        </div>
    )
}