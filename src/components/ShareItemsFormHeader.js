import {useContext} from "react";
import {ShareItemsContext} from "../contextAPI/shareItemsContext";

export const ShareItemsFormHeader = () => {
    const {step} = useContext(ShareItemsContext);

    const warningTextSwitch = (id) => {
        switch(id) {
            case 1:
                return "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.";
            case 2:
                return "Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.";
            case 3:
                return "Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.";
            case 4:
                return "Podaj adres oraz termin odbioru rzeczy.";
            default:
                return;
        }
    }
    return (
        <section className="shareFormHeader">
            <div className="wrapper">
                <div className="content">
                    <h2>Ważne!</h2>
                    <span>{warningTextSwitch(step)}</span>
                </div>
            </div>
        </section>
    )
}