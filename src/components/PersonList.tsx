import React from 'react'
type nameList={
    name:{
        first:string,
        last:string,
    }[]
}

export default function PersonList(props:nameList) {
  return (
    <div>
        {props.name.map(name=>{
            return (
                <h2 key={name.first}>{name.first} {name.last}</h2>
            )
        })}
    </div>
  )
}
