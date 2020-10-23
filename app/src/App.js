import React from 'react';
import Header from "./components/header";
import SearchBar from "./components/searchBar";
import Footer from "./components/footer";
import './App.css';
import WordCard from './components/wordCard';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
      <SearchBar />
      <WordCard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
//bit object that has word key/value
 //results[0] key/value and this is an object
 //results[0].synonyms is an array with one or more strings
 //results[0].definition
 //results[0].partOfSpeech
 //results[0].synonyms
 //results[0].examples
 //results[0].examples[0] is an array with one or more sentenses
 //pronunciation key/value
 //data - object-word
              //-results[0]
              //-pronunciation