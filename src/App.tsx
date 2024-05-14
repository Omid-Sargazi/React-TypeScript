import React from 'react';
import logo from './logo.svg';
import './App.css';
import Great from './components/Great';
import Person from './components/person';
import PersonList from './components/PersonList';

function App() {

  const personName = {
    first: "Omid",
    last: "Sargazi",
   
  }


  const nameList = [
    {
      first:"saeed",
      last:"sargazi",
    },
    {
      first:"saleh",
      last:"sargazi",
    },
    {
      first:"samyar",
      last:"sargazi",
    },
    {
      first:"vahid",
      last:"sargazi",
    }
  ]
  return (
    <div className="App">
      <Great name="OMID SARGAZI" age={40} isLogged={false}/>
      <Person name={personName}/>
      <PersonList name={nameList}/>
    </div>
  );
}

export default App;
