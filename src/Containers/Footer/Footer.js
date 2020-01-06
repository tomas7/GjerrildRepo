import React from 'react'
import myClass from './Footer.module.css'
import Li from '../../Img/Icons/Li_i.png'

function Footer() {
    return (
        <div className={myClass.container}>
        <footer>
            <div>
                <h3>Gjerrild consult</h3>
                <p>Business development</p>
                <p>Company Assistance</p>
                <p>Interrim management</p>
            </div>
            <div>
                <h3>Address</h3>
                <p>Niels Jernes Vej 10</p>
                <p>9220 Aalborg Oest</p>
                <p>Denmark</p>
         
            </div>
            <div>
                <h3>Contact</h3>
                <p>+45 4034 9879</p>
                <p>niels-christian@gjerrild.eu</p>
                <img src={Li} alt="LinkedIn Icon"/>
            </div>
        </footer>
            
        </div>
    )
}

export default Footer
