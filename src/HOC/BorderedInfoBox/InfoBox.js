import React from 'react'
import myClass from './InfoBox.module.css'

function InfoBox(props) {



    return (
        <>
        <div className={myClass.bor_box} >
       
            {props.children}
          
        </div>
        
        </>
       
    )
}

export default InfoBox
