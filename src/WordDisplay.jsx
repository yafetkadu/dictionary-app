import {useState, useEffect} from 'react'

const WordDisplay = ({word, phonetic, phoneticSound}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);


  
  useEffect(() => {
    // Whenever the "word" prop changes, update the audio element
    if (phoneticSound) {
      const newAudio = new Audio(phoneticSound);
      setAudio(newAudio);
    }
  }, [phoneticSound]);

  const playAudio = () => {
    if (audio) {
      audio.play();
    }
  };
  
  return(
     <div className="row">
      <div className="col">
        <h4 className="word">{word}</h4>
        <p className="phonetic">{phonetic}</p>
      </div>
       <div className="col">
        <i className="fa fa-play play-btn" onClick={playAudio}></i>
      </div>
    </div>
  )
}

export default WordDisplay;