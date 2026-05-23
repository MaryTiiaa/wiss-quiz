import './App.css';
import GameSession from "./components/GameSession";

const questions = [
  {
    text: "Welcher Begriff kommt im ICAO-Buchstabieralphabet zuerst?",
    answers: ["Alfa", "Bravo", "Charlie", "Delta"],
    correctAnswer: "Alfa",
  },
  {
    text: "Wie heisst die Hauptfigur in 'The Legend of Zelda'?",
    answers: ["Zelda", "Link", "Ganon", "Impa"],
    correctAnswer: "Link",
  },
  {
    text: "Welches Element hat das chemische Symbol 'Au'?",
    answers: ["Silber", "Aluminium", "Gold", "Argon"],
    correctAnswer: "Gold",
  },
];

function App() {
  return (
    <div className="App">
      <h1>Willkommen beim WISS-Quiz!</h1>
      <GameSession questions={questions}  />
    </div>
  );
}

export default App;