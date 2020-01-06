import React, { Component } from 'react'
import myClass from './Nav.module.css'
import logo from '../Img/Logo/gjerrild_w.png'
import animateScrollTo from 'animated-scroll-to';
import HamAsset from '../Img/Assets/Ham2.png'


export class Nav extends Component {

    state = {
        backgroundColor: "rgba(49, 58, 65, .4)",
        padding: "10px 0px",
        hamVisible:false,
        disp: "hamStyleInVis",
        rightVal: "0%",
        leftVal: "3%",
        height: "64px",
        // padding: "12px 0px",
        paddingLi: "0px 35px",
        theposition: null,
        isBelow: false,
        display:"0px",
        heightI:"10%",
        // top:"-.7rem",
        width:"250px",
        toggled: false,
        isPopUp: false,
        logoMargin:"8px",
        topLogo:"7px",
        posTopHam:"64px",
        // paddingHam:"33px 0px",
        displayLi:"unset",

        home:false,
        clients:false,
        about:false,
        services:false,
        contact:false
    }

 

    options = {
        offset: -90,
        minDuration: 1000,
        maxDuration: 2000
    }


    scrollToTop = () => {
        animateScrollTo(document.querySelector('#home_id'),this.options.maxDuration, this.options.minDuration);
      }
      scrollToClients = () => {
          animateScrollTo(document.querySelector('#clients_id'), this.options);
      }
      scrollToAbout = () => {
          animateScrollTo(document.querySelector('#about_id'), this.options);
      }
      scrollToServices = () => {
          animateScrollTo(document.querySelector('#services_id'), this.options);
      }
      scrollToContact = () => {
        animateScrollTo(document.querySelector('#contact_id'),this.options.maxDuration, this.options.minDuration);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
      }
      
      componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
      }
    
      namAnim = () => {
        this.setState({
            backgroundColor:"rgba(49, 58, 65, .5)",
            // padding: "20px 0px",
            // paddingHam:"33px 0px",
        })
      }

      _navAnim = () => {
        this.setState({
            backgroundColor:"rgba(49, 58, 65, .4)",
            // padding: "10px 0px",
            // paddingHam: "23px 12px"
        })
      }
  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
  
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
  
    const scrolled = winScroll / height
    if (winScroll > 100) {
    
    
      this.namAnim(true)

    }else {
  
      this._navAnim(false)

    }
  
  }

  toggleHamMenu = () => {
    if (this.state.hamVisible) {
      this.setState({
        disp:"hamStyleInVis",
        hamVisible:false,
        displayLi:"unset"
      })
      }
      else
      {
        this.setState({
          disp:"hamStyleVis",
          hamVisible:true,
          displayLi:"none"
        })
    }
  }

    render() {
        return (
            
            <nav style={{backgroundColor: this.state.backgroundColor, padding: this.state.padding}}>
            <div>
            <ul>
                <li onClick={this.scrollToTop} className={myClass.logo}><img href="#" src={logo}/></li>
                <div style={{textAlign: "right"}}>
                  <li onClick={this.scrollToTop} className={myClass.li_el}><a>HOME</a></li>
                  <li onClick={this.scrollToClients} className={myClass.li_el}><a>CLIENTS</a></li>
                  <li onClick={this.scrollToAbout} className={myClass.li_el}><a>ABOUT</a> </li>
                  <li onClick={this.scrollToServices} className={myClass.li_el}><a>SERVICES</a></li>
                  <li onClick={this.scrollToContact} className={myClass.li_el}><a>CONTACT</a></li>
                </div>
              

                <div className={myClass.hamMenuAssetWrapper}>
                  <img className={myClass.hamMenuAsset} style={{padding:this.state.paddingHam}} onClick={this.toggleHamMenu} src={HamAsset}/>
                </div>
              
                <div className={myClass.hamMenu + ' ' + this.state.disp} style={{top: this.state.posTopHam, opacity:this.state.opacityHam}}>
              
                <li onClick={this.scrollToTop} className={myClass} ><a>HOME</a></li>
                <li onClick={this.scrollToClients} className={myClass} ><a>CLIENTS</a></li> 
                <li onClick={this.scrollToAbout} className={myClass} ><a>ABOUT</a></li>
                <li onClick={this.scrollToServices}  className={myClass} ><a>SERVICES</a></li> 
                <li onClick={this.scrollToContact} className={myClass} ><a>CONTACT</a></li> 
            </div>
            </ul>
            </div>
            
        </nav>
          
        )
    }
}

export default Nav


