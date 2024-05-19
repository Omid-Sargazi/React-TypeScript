type InputProps = {
    value:string,
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void;
}
export default function Input(props:InputProps)
{
    return (
        <>
            <h1>Input Component</h1>
            <input value={props.value} onChange={props.handleChange} type="text"/>
        </>
    )
}