import './App.css';
import Welcome from './Welcome'; // am Anfang — die Komponente importieren
import Footer from './Footer';
import Counter from './Counter';

 {/* <Welcome /> im JSX — die Komponente verwenden, wie ein eigenes HTML-Tag
function App() */}

function App() {
  return (
    <div>
      <h1>Willkommwn beim WISS-Quiz!</h1> 
      <p>Hier wird bald unser Quiz starten.</p> 
      <Welcome /> 
      <Counter titel="Punktestand" startwert={0} schritt={1}/>       {/* Vorher: <Counter /> */}
      <Counter titel="Lebenspunkte" startwert={100} schritt={10}/>    {/* Vorher: <Counter /> */}
      <Counter titel="Geldbeutel (in CHF)"startwert={500} schritt={50}/>    {/* Vorher: <Counter /> */}
      <Counter titel="Lautstärke" startwert={5} schritt={1} min={0} max={10} />

      <Footer /> 
    </div>
  );
}

export default App;