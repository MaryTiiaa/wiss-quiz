import './App.css';
import Welcome from './Welcome'; // am Anfang — die Komponente importieren

// <Welcome /> im JSX — die Komponente verwenden, wie ein eigenes HTML-Tag
function App() {
  return (
    <div>
      <h1>Willkommwn beim WISS-Quiz!</h1> 
      <p>Hier wird bald unser Quiz starten.</p> 
      <Welcome /> 
    </div>
  );
}

export default App;