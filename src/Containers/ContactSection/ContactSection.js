import React, {useHooks, useEffect, useRef} from 'react'
import myClass from './ContactSection.module.css'
import arrow from '../../Img/Assets/Arrow.png'
import ReCAPTCHA from "react-google-recaptcha";
import Stripes from '../../Assets/StripeElement/StripeElement'
import { TimelineLite } from 'gsap/all';
import { Power1 } from 'gsap'


function ContactSection(props) {

    const refAnim = useRef();

    let title = null;
    let heading = null;
    let formBody = null;
    let formBody1 = null;
    let button = null;

    useEffect(() => {
        refAnim.current = new TimelineLite({ pause: true })

        .from(title, 0.5, { y: -100, autoAlpha: 0, ease: Power1.easeInOut }, 0.5)
        .from(heading, 0.5, { x: -100, autoAlpha: 0, ease: Power1.easeInOut }, .7)
        .from(formBody, 0.5, { autoAlpha: 0, ease: Power1.easeInOut }, .9)
        .from(formBody1, 0.5, { autoAlpha: 0, ease: Power1.easeInOut }, .9)
        .from(button, 0.5, { y: 100, autoAlpha: 0, ease: Power1.easeInOut }, 1.2)
    }, [])

    useEffect(() => {
        if (props.target) {
            refAnim.current.play()
        }else {
            refAnim.current.reverse()
        }
    })

    function onChange(value) {
        console.log("Captcha value:", value);
      }
  


    return (
        <section className={myClass.container}>
        <Stripes state={props.target} style={{position: "relative", top:"-300px", left:"400px", transition: "1s", transitionDelay: ".2s"}} 
        firstStripeStyle={{transition: "1.2s", transitionDelay: "1.2s",backgroundColor:"rgba(222, 236, 205, .4)"}}
        secondStripeStyle={{top:"62px", left:"461px", transition: ".8s", transitionDelay: "1.6s",backgroundColor:"rgba(184, 218, 137, .6)"}}
        thirdStripeStyle={{top:"42px", left:"865px", transition: ".6s", transitionDelay: "1.8s",backgroundColor:"rgba(117, 155, 65, .9)"}}
            />
            <div className={myClass.wrapper}>
            {/* <div className={myClass.formWrapper}> */}
            <h2  id="contact_id" ref={h2 => title = h2}>CONTACT</h2>
            <h3 ref={h3 => heading = h3}>Reach out</h3>
                
            {/* </div> */}
            <div className={myClass.formColWrapperBig}>
                    <form>
                        <div  ref={form => formBody = form} className={myClass.formColWrapper}>
                        <div className={myClass.fNameField}>
                            <label>
                                Full name:
                                <input className={myClass.inputR} type="text" name="full name" placeholder="John Great" />
                                <input className={myClass.inputF} type="text" disabled/>
                            </label>
                        </div>
                        <div className={myClass.emailField}>
                            <label>
                                Email:
                                <input className={myClass.inputR} type="text" name="email" placeholder="johngreatcorp@gc.com" />
                                <input className={myClass.inputF} type="text" disabled/>
                            </label>
                        </div>

                        <div className={myClass.copmanyField}>
                            <label>
                                Company:
                                <input className={myClass.inputR} type="text" name="Company" placeholder="gcorp" />
                                <input className={myClass.inputF} type="text" disabled/>
                            </label>
                        </div>

                    
                        </div>
                        <div  ref={form => formBody1 = form}  className={myClass.messageField}>
                            <label>
                                Text:
                                <textarea className={myClass.inputR} type="text" name="Text" placeholder="Hi, we might need assistance with..." />
                                <input className={myClass.inputF} type="text" disabled/>
                            </label>
                        </div>
                        {/* <input type="submit" value="Submit" /> */}
                </form>
                <div ref={div => button = div} className={myClass.socialActionWrapper}>
                    <a className={myClass.socialAction} href={console.log("send")}>SEND</a><img src={arrow} alt=""/>
                </div>
                </div>
              

          
            </div>

            {/* <div className={myClass.wrapper1}>
                <h3>Contact us</h3>
                <form>
                    <div className={myClass.formColWrapper}>
                        <label>
                            Name:
                            <input type="text" name="name" placeholder="Name" />
                        </label>
                    </div>
                  
                
                </form>
            </div> */}
            {/* <ReCAPTCHA
                    sitekey="6Ld7DbYUAAAAAAupxFHVvflzx22hfMyQYSql6KsM"
                    onChange={onChange}
                    size="invisible"
                    theme="dark"
            /> */}
        </section>
    )
}

export default ContactSection
