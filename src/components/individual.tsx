import React from 'react'
type PersonsSpec = {
    name:{
        firstName: string,
        lastName:string
    }
}
export default function Individual(props:PersonsSpec) {
  return (
    <div>
        <h2>first name is:{props.name.firstName} and last name is {props.name.lastName}</h2>
    </div>
  )
}
