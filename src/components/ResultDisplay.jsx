import React from 'react';
import './ResultsDisplay.scss'

const ResultDisplay = ({ result }) => {
  return (
    <div id="resultContainer">
      {result ? (
        <div>
          <h2>{result.word}</h2>
          <h3>Phonetics:</h3>
          {result.phonetics.map((phonetic) => (
            <div key={phonetic.text}>
              <p>{phonetic.text}</p>
              {phonetic.audio && (
                <audio controls>
                  <source src={phonetic.audio} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              )}
            </div>
          ))}
          <h3>Meanings:</h3>
          {result.meanings.map((meaning, index) => (
            <div key={index}>
              <p>{meaning.partOfSpeech}</p>
              <ul>
                {meaning.definitions.map((definition, index) => (
                  <li key={index}>
                    <p>{definition.definition}</p>
                    {definition.example && <p>Example: {definition.example}</p>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default ResultDisplay;

