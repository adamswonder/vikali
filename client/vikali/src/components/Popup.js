import React from 'react'
import './Popup.css'

function Popup(props) {
    return (
        <div className='popup-box'>
            < div className='beat-box'>
                <span className='close-icon' onClick={props.handleClose}>x</span>
                {props.content}
            </div>
        </div>
    )
}

export default Popup