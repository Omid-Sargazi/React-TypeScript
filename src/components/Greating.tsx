import React from 'react'


type GreatingProps = {
    name:string,
    messages:number
}

export default function Greating(props:GreatingProps) {
  return (
    <h2>Welcome {props.name}! You have {props.messages} unread Messages....</h2>
  )
}
