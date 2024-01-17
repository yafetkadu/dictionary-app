import WordDisplay from './WordDisplay';
import DictionaryResult from './DictionaryResult';
import { useState, useEffect } from 'react';

const Dictionary = ({ word }) => {



  return (
    
    <div className="meaning-result">
      {word.map((currentWord, index) => (
        <div key={index}>
          <WordDisplay 
            word={currentWord.word} 
            phonetic={currentWord.phonetic}
            phoneticSound={currentWord.audio}
          />
        <DictionaryResult 
          partOfSpeech={currentWord.partOfSpeech}
          definition={currentWord.definition}
          example={currentWord.example}/>
        </div>
      ))}
    </div>
  );
};

export default Dictionary;
