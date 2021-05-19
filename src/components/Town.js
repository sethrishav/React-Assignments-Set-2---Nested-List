import React,{useState} from 'react'

const Town=(props)=> {
    return (
        <>
           <li id={`town${props.id}`}><button>{props.town.name}</button></li> 
        </>
    )
}
export default Town; 
