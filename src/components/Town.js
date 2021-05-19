import React from 'react'

const Town=(props)=> {
    return (
        <div>
           <li><button>{props.towns.name}</button></li> 
        </div>
    )
}
export default Town; 
