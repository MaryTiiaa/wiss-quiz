import { useState } from 'react';

function Counter({ startwert = 0, schritt = 1, titel = 'Mein Counter', min = 0, max = 10 }) {
    const [count, setCount] = useState(startwert);
    const [istSichtbar, setIstSichtbar] = useState(true);
    const [klicks, setKlicks] = useState(0);

    const erhoehen = () => {
        setCount(count + schritt);
        setKlicks(klicks + 1);
    };

    const verringern = () => {
        if (count - schritt >= 0) {
            setCount(count - schritt);
            setKlicks(klicks + 1);
        }
    };

    const reset = () => {
        setCount(startwert);
        setKlicks(0);
    };

    const toggle = () => {
        setIstSichtbar(!istSichtbar);
        setKlicks(klicks + 1);
    };

    const getColor = () => {
        if (count < 10) return 'red';
        if (count >= 50) return 'green';
        return 'black';
    };

    return (
        <div>
            <h2>{titel}</h2>
            <p>Gesamt-Klicks: {klicks}</p>

            <button onClick={toggle}>
                {/* Wenn istSichtbar true ist, zeige 'Counter verstecken'. Sonst zeige 'Counter anzeigen'. */}
                {istSichtbar ? 'Counter verstecken' : 'Counter anzeigen'}
            </button>

            {istSichtbar && (
                <div>
                    {/* Wenn istSichtbar true ist, wird der Counter angezeigt */}
                    <p style={{ color: getColor() }}>
                        Aktueller Zähler: {count}
                    </p>
                    {count >= 100 && <p>Maximum erreicht!</p>}
                    <button onClick={erhoehen}>+{schritt}</button>
                    <button onClick={verringern} disabled={count - schritt < 0}>
                        -{schritt}</button>
                    <button onClick={reset}>Reset</button>
                </div>
            )}
        </div>
    );
}

export default Counter;
