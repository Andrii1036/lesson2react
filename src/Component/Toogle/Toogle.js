import React from 'react'
import './Toogle.css'
export function Toogle() {
    return (
        <label  className='switch'>
            <input type='checkbox' />
            <span className='slider' />
        </label>
    )
}
export default Toogle