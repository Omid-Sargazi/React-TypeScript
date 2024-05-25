import React from "react";
type OscarType = {
    children:React.ReactNode,
} 
const Oscar = (props:OscarType)=>{
    return (
        <>
            <h1>{props.children}</h1>
        </>
    )
}
export default Oscar;