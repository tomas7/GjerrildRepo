import React, {useState, useEffect, useRef} from 'react'
import myClass from './ServicesSection.module.css'
import InfoBox from '../../HOC/BorderedInfoBox/InfoBox'
import ServciesBoxInfo from './ServicesInfoBox/ServicesInfoBox'
import icon_growth from '../../Img/Icons/bar-chart1.png'
import icon_help from '../../Img/Icons/hand1.png'
import icon_serv from '../../Img/Icons/help1.png'
import { TimelineLite, TimelineMax } from 'gsap/all'
import { Bounce, Back, CustomEase, Power1, TweenMax } from 'gsap'
import { TLSSocket } from 'tls';

function ServicesSection(props) {

    const lt = useRef();

   

    let title = null;
    let el1 = null;
    let el2 = null;
    let el3 = null;

    useEffect(() => {
        lt.current = new TimelineLite({paused: true})
       
        .from(title, 0.5, { y: -100, autoAlpha: 0, ease: Power1.easeInOut }, 0.2)
        .from(el1, 0.3, { autoAlpha: 0, ease: Power1.easeInOut }, .5)
        .from(el2, 0.3, { autoAlpha: 0, ease: Power1.easeInOut }, .6)
        .from(el3, 0.3, { autoAlpha: 0, ease: Power1.easeInOut }, .7)

        
    }, [])

    useEffect(() => {
        if (props.target) {
            lt.current.play()
    
        }else {
     
            lt.current.reverse()
        }
    })

  
   

    return (
        <section className={myClass.container}>
            {/* //Services_h_l */}

            <div   id="services_id" className={myClass.wrapper}>
            <h2   ref={h2 => title = h2} id={myClass.Services_h}>SERVICES</h2>
             <div className={myClass.elementWrapper}>
                    <div ref={div => el1 = div} className={myClass.element}>
         
                        <img src={icon_growth} alt="icon"/> 
                        <h3>Business development</h3>
                            <p>Business development, using right technologies to fulfill the market and customer needs</p>
                    </div>
                    
                    <div ref={div => el2 = div} className={myClass.element}>
                        <img src={icon_help} alt="icon"/> 
                        <h3>Investment guidance</h3>
                        <p>Assistance founding new companies, attracting investors and couching of the managenment </p>
                    </div>
                    
                    <div ref={div => el3 = div} className={myClass.element}>  
                        <img src={icon_serv} alt="icon"/> 
                        <h3>Interrim</h3>
                        <p>Interrim management at company level, R&D activities and project management</p>
                </div>
             </div>
        
            
            </div> 
   
        </section>
    )
}

export default ServicesSection
