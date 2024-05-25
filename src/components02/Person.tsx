type PersonName = {
    personName:{firstName:string,
        lastName:string,}
}
const Person = (props:PersonName)=>{
    return (
        <>
        <div>
            <h2>Name is {props.personName.firstName}</h2>
            <h2>Last name is {props.personName.lastName}</h2>
        </div>
        </>
    )
}

export default Person;