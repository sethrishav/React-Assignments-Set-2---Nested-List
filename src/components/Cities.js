import React from 'react'
import Town fron "./Town";
export default function Cities(props) {
    const [click, setClick]=useState(false)
    return (
        <div>
            <li><button onClick={() => setClick(!click)>{props.cities.name}</button></li>
            <ul>
                {click?props.cities.towns.map((towns)=>(
                    <Town towns={towns}/>
                )):""}
            </ul>
        </div>
    )
}
