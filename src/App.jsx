import React from 'react';
import './App.css';

/*



4. Bonus: Make it look nice! 😍
5. Bonus: Snel klaar met deze opdracht en opzoek naar een extra uitdaging? Het is mogelijk (en in de parktijk ook gebruikelijk) om slechts één functie en één state variabele te gebruiken waarmee álle onChange listeners worden afgevangen. Als je hier mee wil experimenteren kun je dit artikel gebruiken als leidraad. Lees het artikel grondig door. De antwoorden voor deze aanpak staan op de branch _ uitwerkingen-bonus_.*/


function App() {
    const [formName, setFormName] = React.useState('');
    const [formAge, setFormAge] = React.useState(0);
    const [formComments, setFormComments] = React.useState([]);
    const [formNewsletter, toggleFormNewsletter] = React.useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formName, formAge, formComments, formNewsletter);
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Gegevens</legend>
                <label htmlFor="details-name">
                    Naam:
                    <input
                        type="text"
                        id="details-name"
                        name={name}
                        onChange={(e) => setFormName(e.target.value)}
                    />
                </label>

                <label htmlFor="details-age">
                    Leeftijd:
                    <input htmlFor="details-age"
                           type="number"
                           id="details-age"
                           name={formAge}
                           onChange={(e) => setFormAge(e.target.value)}
                    />
                </label>
            </fieldset>

            <fieldset>
                <legend>Jouw reviews</legend>
            <label htmlFor="details-comments">
                Opmerkingen:
                <textarea htmlFor="details-comments"
                       type="textarea"
                       id="details-comments"
                       name={formComments}
                       onChange={(e) => setFormComments(e.target.value)}
                >
                </textarea>
            </label>

            <label htmlFor="details-newsletter">
                <input htmlFor="details-newsletter"
                       type="checkbox"
                       id="details-newsletter"
                       name="newsletter"
                       checked={formNewsletter}
                       onChange={() => toggleFormNewsletter(!formNewsletter)}
                />
                Ik meld mij aan voor de nieuwsbrief
            </label>

            <button
                type="submit"
            >
                Versturen
            </button>

            </fieldset>
            {/*

                Versturen-knop (van type submit)*/}
        </form>

    )
        ;
}

export default App;