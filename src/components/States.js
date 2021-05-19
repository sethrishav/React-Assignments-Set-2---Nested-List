import React from 'react'
import Cities from "./Cities";
export default function State(props) {
    const [click, setClick]=useState(false)
    return (
        <div>
            <li><button onClick={() => setClick(!click)>{props.states.name}</button></li>
            <ul>
                {click?props.states.cities.map((cities)=>(
                    <Cities cities={cities}/>
                )):""}
            </ul>
        </div>
    )
}
