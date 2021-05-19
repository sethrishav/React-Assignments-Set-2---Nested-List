import React from 'react'

export default function Town(props) {
    return (
        <div>
           <li><button>{props.towns.name}</button></li> 
        </div>
    )
}
