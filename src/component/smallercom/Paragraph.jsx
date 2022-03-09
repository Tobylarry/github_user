import Image from './Image';
export default function Paragraph(props){
    return(
        <div>
            <p className="p2 p1"><span><Image src={props.src} /></span> {props.desc}</p>
            <p className="p2 p3" id={props.id}><span><Image src={props.src2} /></span>{props.at} {props.desc2}</p>
        </div>
    )
}