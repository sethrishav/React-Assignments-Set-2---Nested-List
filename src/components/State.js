import React, {useState} from 'react'
import Cities from "./Cities";
const State=(props)=> {
    const [click, setClick]=useState(false)
    return (
        <>
            <li onClick={() => setClick(!click)} id={`state${props.id}`}>
            <button>{props.states.name}</button> </li>
            <ul>
                {click?props.states.cities.map((city,i)=>{
                    return (
                    <Cities city={city} key={i+1} id={i+1} />
                    )
                    }): ""}
            </ul>
        </>
    )
}
export default State; 
