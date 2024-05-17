// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Great from './components/Great';
// import Person from './components/person';
// import PersonList from './components/PersonList';

// function App() {

//   const personName = {
//     first: "Omid",
//     last: "Sargazi",
   
//   }


//   const nameList = [
//     {
//       first:"saeed",
//       last:"sargazi",
//     },
//     {
//       first:"saleh",
//       last:"sargazi",
//     },
//     {
//       first:"samyar",
//       last:"sargazi",
//     },
//     {
//       first:"vahid",
//       last:"sargazi",
//     }
//   ]
//   return (
//     <div className="App">
//       <Great name="OMID SARGAZI" age={40} isLogged={false}/>
//       <Person name={personName}/>
//       <PersonList name={nameList}/>
//     </div>
//   );
// }

// export default App;

import "./App.css"
import React from 'react'
import Greating from './components/Greating'

export default function App() {
  return (
    <div className="App">
      <Greating name="Omid" messages={20}/>
    </div>
  )
}
