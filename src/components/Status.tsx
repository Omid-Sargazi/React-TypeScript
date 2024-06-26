import React from 'react'
type StatusAdvancedProps = {
    status:"loading"|"success"|"error"
}

export default function StatusAdvanced(props: StatusAdvancedProps) {
    let message;
    if(props.status === "loading") {
        message="Loading"
    }else if(props.status === "success"){
        message = "deta fetched successfully"
    }else if(props.status === "error"){
        message = "Error fetching data"
    }
    return (
    <div>
        <h2>Status- {message} </h2>
    </div>
  )
}
