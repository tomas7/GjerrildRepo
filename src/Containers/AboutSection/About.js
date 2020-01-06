import React, { Component } from 'react'
import myClass from './About.module.css'
import arrow from '../../Img/Assets/Arrow.png'
import aboutTitle from '../../Img/Assets/Text_About1.png'
import Stripes from '../../Assets/StripeElement/StripeElement'
import { Tween } from 'react-gsap'
import { TimelineLite, TimelineMax } from 'gsap/all'
import { Bounce, Back, CustomEase, Power1, TweenMax } from 'gsap'


export class About extends Component {
    constructor(props){
		super(props);

		this.logoTl = new TimelineLite({ paused:true });
   

		this.head = null;
		this.subhead = null;
		this.buttonWrapper = null;
    }

    
    componentDidMount() {

        this.logoTl
		
			.from(this.head, 0.5, { y: -100, autoAlpha: 0, ease: Power1.easeInOut }, 0.5)
            .from(this.subhead, 0.5, { x: -100, autoAlpha: 0, ease: Power1.easeInOut}, .7)
            .from(this.text, 0.5, { x: -100, autoAlpha: 0, ease: Power1.easeInOut }, .9) // added -0.25 seconds prior to end this.of timeline
            .from(this.buttonWrapper, 0.5, { y: 100, autoAlpha: 0, ease: Power1.easeInOut}, 1.2)
      
    }
   
    render() {
        let stageOfTween = "stop"
        if (this.props.target) {
            this.logoTl.play()
        }else {
            this.logoTl.reverse()
        }

        return (
            <>
    {/* <div className={myClass.titlePlaceholderWrapper}>
        <img className={myClass.titlePlaceholder} src={aboutTitle}/>
    </div> */}
    
   
        <section  className={myClass.container}>
        
        <Stripes state={this.props.target} style={{ position: "relative", top:"-200px", left:"-1000px",float:"right"}} 
            firstStripeStyle={{transition: "1.2s", transitionDelay: "1s",backgroundColor:"rgba(222, 236, 205, .4)"}}
            secondStripeStyle={{top:"62px", left:"461px", transition: "1.2s", transitionDelay: "1.6s",backgroundColor:"rgba(184, 218, 137, .6)"}}
            thirdStripeStyle={{top:"42px", left:"865px", transition: "1.2s", transitionDelay: "1.8s",backgroundColor:"rgba(117, 155, 65, .9)"}}
            />
      


            <div  id="about_id" className={myClass.wrapper}>
            <div  className={myClass.contentWrapper}>
            {/* <Tween disabled={true} from={{x:"-100px", opacity:"0"}} duration={1} delay={1.0}> */}
                <h2 ref={ h2 => this.head = h2 } id="about_id_H">ABOUT US</h2>
            {/* </Tween> */}

            {/* <Tween  disabled={this.props.target} from={{x:"-100px", opacity:"0"}} duration={1} delay={5}> */}
            <h3 id="test" ref={ h3 => this.subhead = h3 }>Our story</h3>
            {/* </Tween> */}
                <p ref={ p => this.text = p }>
                Business philisophy
                gjerrild consul was established 2005 by Niels-Christian Gjerrild.


                <br></br> <br></br>
                We believe that technology is not about creating fancy products.

                It is the art of creating genuine value to the customer solving his problem.
                <br></br> <br></br>
                

                Several clients has benefitted from our advice and assistance.
                Would you like to be one of them ?


         
                </p>
                <div ref= {div => this.buttonWrapper = div} className={myClass.socialActionWrapper}>
                    <a className={myClass.socialAction} href="http://linkedin.com">LET`S CONNECT</a><img src={arrow} alt=""/>
                </div>

            </div>
            
            </div>
           
        </section>
    </>
        )
    }
}

export default About
