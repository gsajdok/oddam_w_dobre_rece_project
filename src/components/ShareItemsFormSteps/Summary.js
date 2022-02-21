import {useContext} from "react";
import {ShareItemsContext} from "../../contextAPI/shareItemsContext";
import shirtImage from '../../assets/Icon-1.svg';
import recycleImage from '../../assets/Icon-2.svg';

export const Summary = () => {
    const {formData, setFormData} = useContext(ShareItemsContext);

    const arrayOfTypes = ["nic", "ubrania, które nadają się do ponownego użycia", "ubrania do wyrzucenia", "zabawki", "książki", "inne"]
    const arrayOfHelpGroups = ["dzieciom", "samotnym matkom", "bezdomnym", "niepełnosprawnym", "osobom starszym"];
    const arrayOfLocalisations = ["Nigdzie", "Poznań", "Warszawa", "Kraków", "Wrocław", "Katowice"]

    return (
        <div className="formWrapper">
            <h2>Podsumowanie Twojej darowizny</h2>
            <div className="rows">
                <h3>Oddajesz:</h3>
                <div className="row">
                    <img src={shirtImage} alt="Shirt"/> <span>{formData.amount} worki, {arrayOfTypes[formData.type]}, {arrayOfHelpGroups.filter((item, index) => formData.helpGroups[index]).join(", ")}</span>
                </div>
                <div className="row">
                    <img src={recycleImage} alt="Recycle"/> <span>dla lokalizacji: {arrayOfLocalisations[formData.localisation]}</span>
                </div>
            </div>
            <div className="twoColumns">
                <div className="column">
                    <h3>Adres odbioru:</h3>
                    <div className="addressSummary">
                        <p><span>Ulica</span> {formData.address.street}</p>
                        <p><span>Miasto</span> {formData.address.city}</p>
                            <p><span>Kod pocztowy</span> {formData.address.postalCode}</p>
                                <p><span>Numer telefonu</span> {formData.address.phoneNumber}</p>
                    </div>
                </div>
                <div className="column">
                    <h3>Termin odbioru:</h3>
                    <div className="collectionSummary">
                        <p><span>Data</span> {formData.collection.date}</p>
                            <p><span>Godzina</span> {formData.collection.hour}</p>
                        <p><span>Uwagi do kuriera</span> {formData.collection.comments}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}