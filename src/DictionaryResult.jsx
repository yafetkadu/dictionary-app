const DictionaryResult = ({partOfSpeech, definition, example}) => {
  return(
    <div className="word-results">
       
        <h5 className="partOfSpeech">{partOfSpeech}</h5><hr/>

        <div className="dictionary-result">
          <p className="meaning">Meaning</p>
        <ul>
            <li className="definition">{definition}</li>
            <p className="example">{example}</p>
        </ul>
        </div>
    </div> 
  )
}

export default DictionaryResult;