import React from 'react'
import { Tween } from 'react-gsap'
import myClass from './StripeElement.module.css'

function StripeElement(props) {
 


    return (
        <> 
        {/* <button style={{position:"absolute", top: "100px"}} onClick={() => setstate("play")}>CLick</button> */}
          
                {/* <svg style={{ pointerEvents: "none", height:"50%",position: "absolute",top:"73px", overflow: "visible",zIndex: "99" }}id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1068 1110">
                <Tween from={{ x: "-100px", opacity:"0"}} duration={.5} delay={2} >
                <polygon class="cls-1" points="1104 1320 796 1320 0 368 0 0 1104 1320"/>
                </Tween>
                <Tween from={{ x: "-100px", opacity:"0"}} duration={1} delay={1.75} >
                <polygon class="cls-2" points="1021 1589 712 1589 0 735 0 367 1021 1589"/>
                </Tween>
                <Tween from={{ x: "-100px", opacity:"0"}} duration={1.5} delay={1.5} >
                <polygon class="cls-3" points="416 1234 107.82 1233.94 0 1103 0 735 416 1234"/>
                </Tween>
                </svg> */}
            <div className={myClass.bigWrapper} style={props.style}>
                
                    <div className={props.state ? myClass.stripe_on : myClass.stripe} style={props.firstStripeStyle}></div>
                    <div className={props.state ? myClass.stripe_on : myClass.stripe} style={props.secondStripeStyle}></div>
                    <div className={props.state ? myClass.stripe_on : myClass.stripe} style={props.thirdStripeStyle}></div>
            </div>

          
        </>





    )
}

export default StripeElement
