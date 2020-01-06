import React, { Component } from 'react'
import myClass from './ContentWrapper.module.css'
import Nav from '../../Nav/Nav'
import LandingSection from '../LandingSection/LandingSection.js'
import ServicesSection from '../ServicesSection/ServicesSection.js'
import AboutSection from '../AboutSection/About'
import ClientsSection from '../ClientSection/ClientSection'
import ContactSection from '../ContactSection/ContactSection'

export class ContentWrapper extends Component {
    state = {
        home:false,
        clients:false,
        about:false,
        services:false,
        contact:false
    }
    isBottom(el) {
     
        return el.getBoundingClientRect().top +400 <= window.innerHeight;
      }
         
  
      componentDidMount = () => {
        document.addEventListener('scroll', this.trackScrolling);
        setTimeout(()=> {
            this.setState({
                home:true
            })
        },1000)
    }
    componentWillUnmount() {
      document.removeEventListener('scroll', this.trackScrolling);
    }
      
      trackScrolling = () => {
        //   console.log("|tracking")
        const outWorkItemEl1 = document.getElementById('home_id');
        const outWorkItemEl2 = document.getElementById('services_id');
        const outWorkItemEl3 = document.getElementById('about_id');
        const outWorkItemEl4 = document.getElementById('clients_id');
        const outWorkItemEl5 = document.getElementById('contact_id');
        
        console.log(outWorkItemEl3)
       
       console.log(outWorkItemEl2.getBoundingClientRect().bottom <= window.innerHeight)
        // if (this.isBottom(outWorkItemEl1) && !this.state.home){
        //   console.log("1");
      
        // this.setState({
        //   home: true
        // })
        // }else if(!this.isBottom(outWorkItemEl1) && this.state.home){
        //   this.setState({
        //     home: false
        //   })
        // }
  
        if (this.isBottom(outWorkItemEl2) && !this.state.services ) {
        
            this.setState({
              services: true
            })
        }else if(!this.isBottom(outWorkItemEl2) && this.state.services){

          this.setState({
            services: false
          })
        }
        if (this.isBottom(outWorkItemEl3) && !this.state.about) {
          console.log(">>3")
          this.setState({
            about: true
          })
        }else if(!this.isBottom(outWorkItemEl3) && this.state.about){
     
          this.setState({
            about: false
          })
        }
        if (this.isBottom(outWorkItemEl4) && !this.state.clients ) {
            console.log("4")
            this.setState({
              clients: true
            })
  
        // this.state.currentSection(4)
        }else if(!this.isBottom(outWorkItemEl4) && this.state.clients){
    
            this.setState({
                clients: false
            })
          }
          if (this.isBottom(outWorkItemEl5) && !this.state.contact ) {
            console.log("5")
            this.setState({
              contact: true
            })
  
        // this.state.currentSection(4)
        }else if(!this.isBottom(outWorkItemEl5) && this.state.contact){
            this.setState({
                contact: false
            })
          }
      };

    render() {
        return (
            <div className={myClass.contentWrapper}>
            <Nav/>
            <LandingSection target={this.state.home}/>
            {/* <h2>SERVICES</h2> */}
            <ServicesSection target={this.state.services}/>
            {/* <h2>ABOUT US</h2> */}
            <AboutSection target={this.state.about}/>
            {/* <h2>CLIENTS</h2> */}
            <ClientsSection target={this.state.clients}/>
            {/* <h2>CONTACT</h2> */}
            <ContactSection target={this.state.contact}/>
        </div>
        )
    }
}

export default ContentWrapper
