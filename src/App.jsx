import './App.css'
import {useState, useEffect} from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import Dictionary from './Dictionary'
/*import ContactManager from './ContactManager'*/

export default function App() {

  const [dicInput, setdicInput] = useState('')
  const [wordResult, setWordResult] = useState([]);

  async function fetchWord(searched) {
    var response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searched}`);
    var result = await response.json();
    setWordResult([]) // clears the wordResults
    
    var newWordResults = []; // Create a temporary array to store the new word results


    

    for (var currWord of result) {

      var currWordResults = {}
      for (var currMeaning of currWord.meanings) {

        
        for(var currPhonetic of currWord.phonetics) {
            //console.log(currPhonetic)
            if(currPhonetic.audio != "") {
                currWordResults.audio = currPhonetic.audio
            }
        }
        
        for (var currDefinition of currMeaning.definitions) {
            currWordResults.word = currWord.word
            currWordResults.phonetic = currWord.phonetic
            currWordResults.partOfSpeech = currMeaning.partOfSpeech
            currWordResults.definition = currDefinition.definition
            currWordResults.example = currDefinition.example
          
          
        }
      }
      newWordResults.push(currWordResults); // Push the current word result to the temporary array

      console.log(currWordResults)
    }

    

    setWordResult((prevWordResult) => [...prevWordResult, ...newWordResults]); // Update the state with the new word results
  }

  

  function getWord(currentWord) {
    fetchWord(currentWord);
    //console.log(wordResult)
  }


    useEffect(() => {
    // You can perform actions here that depend on the updated wordResult state
    // For example, you can log it or update the UI
    console.log("Word Result has changed:", wordResult);
  }, [wordResult]);


  const searchWord = () => {
    console.log("Searching:", dicInput)
    getWord(dicInput)
  }
  
  return (
    <div className="wrapper">

     <Header/>
     <main>
       <SearchBar 
        searchInput={(e) => {
          setdicInput(e.target.value)
          console.log(dicInput)
        }} 
         inputValue={dicInput}
         searchBtn={searchWord}
        />
       <Dictionary
         word={wordResult}
        />
     </main>
    </div>
  )
}
