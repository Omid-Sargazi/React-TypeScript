type NameGreet = {
    name:string,
    lang:string
    loggedin:boolean
}
const Greet = (props:NameGreet)=>{
    return (
        <>
            <div>
               <h2>
                {
                    props.loggedin ? `Welcome ${props.name} You have ${props.lang}`:"please loggedin "
                }
               </h2>
                
            </div>
        </>
    )
}

export default Greet;