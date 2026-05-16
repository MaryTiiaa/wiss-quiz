import {useState} from 'react';
 
function Counter() {
    const [count, setCount] = useState(0);
    const [istSichtbar, setIstSichtbar] = useState(true);
    const [titel, setTitel] = useState('Mein Counter');
    const [klicks, setKlicks] = useState(0);
 
    const erhoehen = () =>{
        setCount(count +5);
        setKlicks(klicks +1);
    };
 
    const verringern = () => {
        if(count > 0){
            setCount(count -5);
        }
        setKlicks(klicks +1);
    };
 
    const reset = () => {
        setCount(0);
        setKlicks(0);
    };
 
    const toggle = () => {
        setIstSichtbar(!istSichtbar);
        setKlicks(klicks +1);
    }
    const getColor = () => {
        if(count < 10) return 'red';
        if(count >= 50) return 'green';
        return 'black';
    };
 
    return (
        <div>
            <h2>{titel} </h2>
            <p>Gesamt-Klicks: {klicks}</p>
 
            <button onClick={toggle}>
                {istSichtbar ? 'Counter verstecken' : 'Counter anzeigen'}
            </button>
 
            {istSichtbar && (
                <div>
                <p style={{ color: getColor()}}>  
                Aktueller Zähler: {count}
                 </p>
                 {count >= 100 && <p> Maximum erreicht!</p>}                  
                    <button onClick={erhoehen}>Erhöhen</button>
                    <button onClick={verringern}>Verringern</button>
                    <button onClick={reset}>Reset</button>
                </div>
            )}
        </div>
    );
    }
    export default Counter;

// onClick={erhoehen} → bei Klick wird die Funktion aufgerufen
// setIstSichtbar(!istSichtbar); Toggle-Funktion: dreht den Wert um: aus true wird false, aus false wird true.
// setIstSichtbar(!istSichtbar); // Toggle-Funktion: dreht den Wert um: aus true wird false, aus false wird true.
// {istSichtbar ? 'Counter verstecken' : 'Counter anzeigen'} // Button-Text abhängig von istSichtbar  "Wenn istSichtbar true ist, zeige 'Counter verstecken'. Sonst zeige 'Counter anzeigen'." 
// {istSichtbar && (   // Wenn istSichtbar true ist, wird der Counter angezeigt