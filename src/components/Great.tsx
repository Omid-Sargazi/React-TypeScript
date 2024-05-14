import React from 'react'
type GreetProps = {
    name:string
}

export default function Great(props:GreetProps) {
  return (
    <div>Great Lets go into TypeScript with {props.name}</div>
  )
}
