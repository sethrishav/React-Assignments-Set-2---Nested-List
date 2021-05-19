import React,{useState} from 'react'
import Town from "./Town";
const Cities=(props)=> {
    const [click2, setClick2]=useState(false)
    return (
        <>
            <li onClick={() => setClick2(!click2)} id={`city${props.id}`} >
                <button >{props.city.name}</button>
                </li>
            <ul>
                {click2 ? props.city.towns.map((town,i)=>{
                   return (
                    <Town town={town} key={i+1} id={i+1} />
                   )
                   }): ""}
            </ul>
        </>
    )
}
export default Cities; 
