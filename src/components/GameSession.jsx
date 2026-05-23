import { useState } from 'react';
import Button from './Button';

function GameSession({ questions }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showScore, setShowScore] = useState(false);

  const currentQuestion = questions[questionIndex];
  const isLastQuestion = questionIndex === questions.length - 1;
  
  const handleAnswerClick = (selectedAnswer) => {
    setIsAnswered(true);

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setFeedback("Richtig!");
      setScore(score + 1);
    } else {
      setFeedback(`Falsch! Richtige Antwort: ${currentQuestion.correctAnswer}`);
    }
  };

  function handleNext() {
    setQuestionIndex(questionIndex + 1);
    setFeedback(null);
    setIsAnswered(false);
  }

  function handleEndGame() {
    setShowScore(true);
  }

  function resetGame() {
    setQuestionIndex(0);
    setFeedback(null);
    setScore(0);
    setIsAnswered(false);
    setShowScore(false);
  }

  if (showScore) {
  return (
    <div>
      <h2>Spiel beendet!</h2>
      <p>Du hast {score} von {questions.length} richtig.</p>
      <Button text="Neues Spiel" onClick={resetGame} />
    </div>
  );
}

  return (
    <div>
      <p>Punkte: {score}</p>
      <h2>{currentQuestion.text}</h2>

      <div>
        {currentQuestion.answers.map((answer) => (
          <Button
            key={answer}
            text={answer}
            onClick={() => handleAnswerClick(answer)}
            disabled={isAnswered}
          />
        ))}
      </div>

      {feedback && <p>{feedback}</p>}
      {isAnswered && !isLastQuestion && (
        <Button onClick={handleNext} text="Weiter" />
      )}
      {isAnswered && isLastQuestion && (
        <Button onClick={handleEndGame} text="Spiel beenden" />
      )}
      
    </div>
  );
}

export default GameSession;