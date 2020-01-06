import React, { Component } from 'react'
import myClass from './ClientsInfoBox.module.css'
import arrow from '../../../Img/Assets/Arrow.png'
import Pulse from 'react-reveal/Pulse';

export class ClientsInfoBox extends Component {

   

    render() {
        let active = this.props.active
        let bullets =  <>
        <div style={{backgroundColor:"black"}}></div>
        <div></div>
    </>
        if (active === 1) {
            bullets =
            <>
                <div></div>
                <div style={{backgroundColor:"black"}}></div>
              
            </>
        }
        return (
           
           
            <div ref={this.props.refWrapper} className={myClass.clientInfoBoxWrapper}>
                <h3>{this.props.h}</h3>
                <i>{this.props.i}</i>
                <p>{this.props.p}</p>
                
                <div className={myClass.socialActionWrapper}  onClick={this.props.nextWinHandler}>
                    <a className={myClass.socialAction}>NEXT</a><img src={arrow} alt=""/>
                </div>
                <div className={myClass.dotWrapper} onClick={this.props.nextWinHandler}>
                    
                {bullets}
                </div>
            </div>
         
        )
    }
}

export default ClientsInfoBox
