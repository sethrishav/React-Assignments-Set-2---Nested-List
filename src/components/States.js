import React from 'react'
import Cities from "./Cities";
const State=(props)=> {
    const [click, setClick]=useState(false)
    return (
        <div>
            <li onClick={() => setClick(!click)>
            <button>{props.states.name}</button> </li>
            <ul>
                {click?props.states.cities.map((cities)=>{
                    return (
                    <Cities cities={cities}/>
                    )
                    }):""}
            </ul>
        </div>
    )
}
export default State; 
