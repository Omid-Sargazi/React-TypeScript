import React from 'react'

type IndividualListProps = {

    names: {
        firstName:string,
        lastName:string,
    }[]

}


export default function IndividualList(props: IndividualListProps) {
  return (
    <div>
        {props.names.map(p=><ul>
            <li>{p.firstName}</li>
            <li>{p.lastName}</li>
        </ul>)}
    </div>
  )
}
