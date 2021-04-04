import React from 'react'
import './Toogle.css'
export function Toogle(props) {
    let toogleOn = true
    const id=props.id
    const ToogleOn=(id)=>{
        toogleOn=!toogleOn
        let elem=document.getElementById(id)
        {!toogleOn ? elem.style.height='0' : elem.style.height='400px'}
    }
    return (
        <label className='switch'>
            <input onClick={()=>ToogleOn(id)} type='checkbox' />
            <span className='slider' />
        </label>
    )
}
export default Toogle