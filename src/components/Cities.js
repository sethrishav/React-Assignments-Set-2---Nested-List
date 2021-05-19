import React from 'react'
import Town fron "./Town";
const Cities=(props)=> {
    const [click, setClick]=useState(false)
    return (
        <div>
            <li onClick={() => setClick(!click)><button >{props.cities.name}</button></li>
            <ul>
                {click ? props.cities.towns.map((towns)=>{
                   return (
                    <Town towns={towns}/>
                   )
                   }):""}
            </ul>
        </div>
    )
}
export default Cities; 
