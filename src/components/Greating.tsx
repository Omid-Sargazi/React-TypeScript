import React from 'react'


type GreatingProps = {
    name:string,
    messages:number,
    isLogged:boolean,
}

export default function Greating(props:GreatingProps) {
  return (
      <>
       <h2>{ props.isLogged ? `Welcome ${props.name}! You have ${props.messages} unread Messages....`:" Please Log in" }</h2>
      </>
  )
}
