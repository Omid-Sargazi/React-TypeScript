type StatusProps = {
    status:"loading"| "success" |"error",
}
const Status = (props:StatusProps)=>{

    let message;

    if(props.status==="loading"){
        message="loading..."
    }else if(props.status==="success")
        {
            message="Date fetched successfully"
        }else if(props.status==="error"){
            message="Error fetching data...."
        }


    return (
        <>
            <h1>Status page</h1>
            <h2>Status-{message}</h2>
        </>
    )
}

export default Status;