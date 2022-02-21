import {useContext} from "react";
import {ShareItemsContext} from "../../contextAPI/shareItemsContext";

export const StepThree = () => {
    const {formData, setFormData} = useContext(ShareItemsContext);

    const onChangeValueSelect = (e) => {
        if(e.target.name==="localisation") {
            setFormData(prevState => ({
                ...prevState,
                localisation: parseInt(e.target.value)
            }));
        }
    }

    const onClickValueButton = (e) => {
        let optionsArrayCopy = formData.helpGroups;
        optionsArrayCopy.splice(parseInt(e.target.value), 1, !optionsArrayCopy[parseInt(e.target.value)]);
        setFormData(prevState => ({
            ...prevState,
            helpGroups: optionsArrayCopy
        }));
    }

    const onChangeValueInput = (e) => {
        setFormData(prevState => ({
            ...prevState,
            groupName: e.target.value
        }));
    }

    return (
        <div className="formWrapper">
            <h2>Lokalizacja:</h2>
            <div className="selectForm">
                <form>
                    <label>
                        <select style={{marginLeft: 0}} name="localisation" onChange={onChangeValueSelect} value={formData.localisation}>
                            <option value="0" disabled hidden>--- wybierz ---</option>
                            <option value="1">Poznań</option>
                            <option value="2">Warszawa</option>
                            <option value="3">Kraków</option>
                            <option value="4">Wrocław</option>
                            <option value="5">Katowice</option>
                        </select>
                    </label>
                </form>
            </div>
            <div className="helpGroupsForm">
                <h3>Komu chcesz pomóc?</h3>
                <div className="helpGroupsButtons">
                    <button value="0" className={`button button--active ${formData.helpGroups[0] && "button--toggled"}`} onClick={onClickValueButton}>dzieciom</button>
                    <button value="1" className={`button button--active ${formData.helpGroups[1] && "button--toggled"}`} onClick={onClickValueButton}>samotnym matkom</button>
                    <button value="2" className={`button button--active ${formData.helpGroups[2] && "button--toggled"}`} onClick={onClickValueButton}>bezdomnym</button>
                    <button value="3" className={`button button--active ${formData.helpGroups[3] && "button--toggled"}`} onClick={onClickValueButton}>niepełnosprawnym</button>
                    <button value="4" className={`button button--active ${formData.helpGroups[4] && "button--toggled"}`} onClick={onClickValueButton}>osobom starszym</button>
                </div>
            </div>
            <div className="customGroupForm">
                <h3>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
                <input type="text" value={formData.groupName} onChange={onChangeValueInput}/>
            </div>
        </div>
    )
}