export const HomeContactForm = ({handleSubmit, name, email, message, errors, success, setName, setEmail, setMessage}) => {
    return (
        <form id="form" onSubmit={handleSubmit}>
            <label className="halfWidth">
                Wpisz swoje imię:
                <input type="text" disabled={success === 1} placeholder="Krzysztof" className={`textInput ${errors.name && "errorBorder"}`} value={name} onChange={(e) => setName(e.target.value)}/>
                {errors.name && <span className="errorText">Podane imię jest nieprawidłowe!</span>}
            </label>
            <label className="halfWidth">
                Wpisz swój email:
                <input type="text" disabled={success === 1} placeholder="abc@xyz.pl" className={`textInput ${errors.email && "errorBorder"}`} value={email} onChange={(e) => setEmail(e.target.value)}/>
                {errors.email && <span className="errorText">Podany email jest nieprawidłowy!</span>}
            </label>
            <label>
                Wpisz swoją wiadomość:
                <textarea rows="5" disabled={success === 1} className={`${errors.message && "errorBorder"}`}value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                {errors.message && <span className="errorText">Wiadomość musi mieć conajmniej 120 znaków!</span>}
            </label>
            <input type="submit" disabled={success === 1} className="submitInput button button--active" value="Wyślij" id="form__submit"/>
        </form>
    )
}