import React, { useState } from 'react'
import myClass from './LandingSection.module.css'
import landing_bg from './../../Img/Assets/Logo_bg.png'
import Stripes from '../../Assets/StripeElement/StripeElement'
import arrow from '../../Img/Assets/Arrow.png'
import person from '../../Img/Assets/Person-c.png'
import { Tween } from 'react-gsap'
import animateScrollTo from 'animated-scroll-to';

function LandingSection(props) {
    const [state, setstate] = useState(false)
    
    
    const options = {
        offset: -90,
        minDuration: 1000,
        maxDuration: 2000
    }



      const scrollToClients = () => {
          animateScrollTo(document.querySelector('#services_id'), options);
      }

    return (
        <section id="home_id" className={myClass.container}>
      
            <Stripes state={props.target} style={{position: "relative", top:"", left:"-900px", transition: "1s", transitionDelay: "0s"}} 
            firstStripeStyle={{transition: "1.2s", transitionDelay: ".6s",backgroundColor:"rgba(117, 155, 65, .9)"}}
            secondStripeStyle={{top:"62px", left:"461px", transition: "1.2s", transitionDelay: "1s",backgroundColor:"rgba(184, 218, 137, .6)"}}
            thirdStripeStyle={{top:"42px", left:"865px", transition: "1.4s", transitionDelay: "1.4s",backgroundColor:"rgba(222, 236, 205, .4)"}}
            />
    
            <div className={myClass.wrapper}>
 

                <div className={myClass.textBox}>
             
                    <Tween from={{y:"-150px", opacity:"0"}} duration={1} delay={0}>
                    <h1>Welcome to Gjerrild consultancy</h1>
                    <p>We focus on business development, assistance and consult that solve your problems!
                  
                    <br></br>
                    Our believe is in new technologies that enables your growth.</p>
                    </Tween>
                    <Tween from={{ opacity:"0"}} duration={1.5} delay={1.5}>
                    <img src={arrow} onClick={scrollToClients} alt="blank"/>
                    </Tween>
                </div>   
               
           
            </div>    
            <Tween from={{y:"150px", opacity:"0"}} duration={1.5} delay={1.5}>
                   
                    
                <img className={myClass.bgImg} src={person}/>
            </Tween>
        </section>
    )
}

export default LandingSection

