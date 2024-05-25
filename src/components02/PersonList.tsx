type personList = {
    list:{
        firstName:string,
        lastName:string,
    }[]
}
const PersonList = (props:personList)=>{
    return (
        <>
        {props.list.map(l=>(
            <h1 key={l.lastName}> first name:{l.firstName} and last {l.lastName}</h1>
        ))}
        </>
    )
}
export default PersonList;