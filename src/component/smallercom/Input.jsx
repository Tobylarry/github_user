export default function Input(props){
    return <input className={props.className} type={props.type} value={props.value} placeholder={props.placeholder} onClick={props.onClick}/>
}