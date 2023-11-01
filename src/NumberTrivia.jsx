import React, { useState } from 'react';

function NumberTrivia() {
  const [number, setNumber] = useState('');
  const [trivia, setTrivia] = useState('');

  const handleInputChange = (event) => {
    setNumber(event.target.value);
  };

  const handleFetchTrivia = () => {
    if (number !== '') {
      fetch(`http://numbersapi.com/${number}/trivia?json`)
        .then((response) => response.json())
        .then((data) => setTrivia(data.text))
        .catch((error) => console.error('Error fetching trivia: ', error));
    }
  };

  return (
    <div className="number-trivia" style={{margin: '2rem'}}>
      <h1>Number Trivia App</h1>
      <hr/>
      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={handleInputChange}
        style={{marginBottom: '1rem', padding: '6px'}}
      />

      <br/>

      <button onClick={handleFetchTrivia} style={{backgroundColor: "green", color: "white", borderRadius: "0.5rem", padding: '6px', fontWeight: 'bold'}}>Get Trivia</button>
      {trivia && <p>{trivia}</p>}
    </div>
  );
}

export default NumberTrivia;
