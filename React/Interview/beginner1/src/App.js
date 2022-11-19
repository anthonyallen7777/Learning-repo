import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('test');
  const [fetchedWords, setfetchedWords] = useState([]);

  const fetchSynWords = (wordToFetch) => {
    let phraseToFetch = wordToFetch.replace(/\s+/g, '+');
    axios.get('https://api.datamuse.com/words?rel_syn='+phraseToFetch)
    .then(res => {
      setfetchedWords(res.data);
    })
    .catch(error => {
      console.error(error);
    })
  }

  const buttonSubmitHandler = event => {
    event.preventDefault();
    fetchSynWords(inputValue);
  }
  

  const wordClickHandler = (clickedWord) => {
    fetchSynWords(clickedWord);
    setInputValue(clickedWord);
  }
  
  return (
    <div className="App">
      <h2>Similar Words App</h2>
      <form>
        <input
        type="text"
        value={inputValue}
        onChange={(event)=>
          setInputValue(event.target.value)}
        ></input>
        <button
        onClick={buttonSubmitHandler}
        >Get Similar Words</button>
      </form>

      <ul>
        {fetchedWords.map(wordObj => (
          <li onClick={() =>
            wordClickHandler(wordObj.word)}
          key={wordObj.word}
          >{wordObj.word}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
