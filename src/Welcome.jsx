function Welcome() {    // Wir definieren eine Funktion Welcome, die JSX zurückgibt
    const username = "Anna";
  return (
    <div>
      <h2>Hallo {username}!</h2>
      <p>Bereit für die erste Frage?</p>
    </div>
  );
}

export default Welcome; // Wir exportieren sie mit export default, damit andere Files sie importieren können
