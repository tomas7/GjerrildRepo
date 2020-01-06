import React, { Component } from 'react'
import myClass from './ClientSection.module.css'
import InfoBox from '../../HOC/BorderedInfoBox/InfoBox'
import ServciesBoxInfo from './ClientsInfoBox/ClientsInfoBox'
import Pulse from 'react-reveal/Pulse';
import { TimelineLite, TimelineMax } from 'gsap/all';
import CSSPlugin from 'gsap/CSSPlugin';
import { Power1 } from 'gsap'

const C = CSSPlugin;  // here is the gotcha...

export class ClientSection extends Component {
    constructor(props){
        super()
        this.state={
            dommyState: 0,
            h: "ABC Corp",
            i: "Henry Madsen",
            p: "\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, et distinctio atque voluptate a ipsum adipisci vitae natus, accusamus doloribus enim eligendi quidem, qui corporis?\""
        };

        this.animated = new TimelineMax({ pause: true })

        this.outerWrapper = null
        this.title = null;
        this.wrapper = null;
        this.wrapperTitle = null;
  
    }

   componentDidMount() {
       this.animated
            .from(this.outerWrapper, 0.2, { autoAlpha: 0, ease:Power1.easeInOut}, 0.2)
            .from(this.title, 0.5, {y: -100, autoAlpha: 0, ease:Power1.easeInOut}, 0.5)
            .from(this.wrapper, 0.5, {autoAlpha: 0, ease:Power1.easeInOut}, 0.5)
   }
    
    changeProp = () => {
        this.setState(prevState => {
            if (prevState.dommyState === 0) {
                return {
                    dommyState: prevState.dommyState + 1,
                    h: "AAA Corp",
                    i: "Peter Petersen",
                    p: "\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum non labore ex.\""
                    
                }
            
            } 
            else if(prevState.dommyState === 1){
                return {
                    dommyState: prevState.dommyState - 1,
                    h: "ABC Corp",
                    i: "Henry Madsen",
                    p: "\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, et distinctio atque voluptate a ipsum adipisci vitae natus, accusamus doloribus enim eligendi quidem, qui corporis?\""
                }
            }
           
           
        })
    }

    render() {
        if(this.props.target){
            this.animated.play()
        }else {
            this.animated.reverse()
        }
        return (
           
        <section  className={myClass.container}>
           
            <div id="clients_id" ref={div => this.outerWrapper = div} className={myClass.wrapper}>
            <h2 ref={h2 => this.title = h2} className={myClass.client_H}>CLIENTS</h2>
            <Pulse spy={this.state.dommyState}
            appear={true}>
                <InfoBox >
                    <ServciesBoxInfo 
                    active={this.state.dommyState} 
                    h={this.state.h} 
                    i={this.state.i} 
                    p={this.state.p} 
                    nextWinHandler={() => this.changeProp()} 
                    refWrapper={div => this.wrapper = div}    
                    refWrapperTitle={h2 => this.wrapperTitle = h2}       
                    refWrapperBody={div => this.wrapperBody = div}         
                    refRest={div => this.rest = div}              
                    />
                </InfoBox>
                
                </Pulse>
            </div> 
        </section>
        
        )
    }
}

export default ClientSection
