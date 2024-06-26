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
// import Greating from './components/Greating'
// import Individual from "./components/individual"
// import IndividualList from "./components/individualList"
// import StatusAdvanced from "./components/Status"
// import Heading from "./components/Heading"
// import Oscar from "./components/Oscar"
// import Great from './components/Great';
// import Button from "./components/Button";
// import Input from "./components/Input";
// import Container from "./components/Container";
// import Loggedin from "./components/State/loggedin";
// import User from "./components/State/User";
/////////////////////////////////
import Greet from "./components02/Greet";
import Person from "./components02/Person";
import PersonList from "./components02/PersonList";
import Status from "./components02/Status";
import Heading from "./components02/Heading";
import Oscar from "./components02/Oscar";


export default function App() {

  const personName = {
    firstName: 'John',
    lastName: 'Doe',
  }
  const listIndividual= [ 
    {
      firstName: 'Saeed',
      lastName: 'Sargazi',
    },
    {
      firstName: 'Saleh',
      lastName: 'Sargazi',
    },
    {
      firstName: 'Vahid',
      lastName: 'Sargazi',
    },
    {
      firstName: 'Samyar',
      lastName: 'Sargazi',
    },
  ]
  return (
    <div className="App">
      {/* <Greating name="Omid" messages={20} isLogged={false}/>
      <Individual name={personName}/>
      <IndividualList names={listIndividual}/>
      <StatusAdvanced status="loading"/>
      <Heading>PlaceHolder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio...</Heading>
      </Oscar>
      <Great name="omid"  isLogged={true}/>
      <Button handleClick={(event,id)=> {console.log("Clicked", event,id)}}/>
      <Input value={""} handleChange={(event)=>{console.log("changed....",event.target.value)}}/>
      <Container styles={{background:"green", padding:"1rem", margin:"auto", border:"1px solid white", width:"30rem"}} />
      <Loggedin />
      <User/> */}
      <Greet name="omid" lang="java" loggedin={true}/>
      <Person personName={personName} />
      <PersonList list={listIndividual}/>
      <Status status={"error"}/>
      <Heading>Place Holder Text</Heading>
      <Oscar >
        <Heading>Oscar goes to Omid</Heading>
      </Oscar>
    </div>
  )
}
