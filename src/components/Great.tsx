import React from 'react'
type GreetProps = {
    name:string,
    age:number,
    isLogged:boolean,
}

export default function Great(props:GreetProps) {
  return (
    <>
    {props.isLogged ? <div>Great Lets go into TypeScript with {props.name} i`M {props.age} YEARS old</div> :"Please, Enter correct password again"}
    </>
  )
}
