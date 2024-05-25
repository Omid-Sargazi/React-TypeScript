type headingChildren = {
    children:string
}
const Heading = (props:headingChildren)=>{
    return (
        <>
            <h1>{props.children}</h1>
        </>
    )
}

export default Heading;