import React from 'react'
import myclass from './ServicesInfoBox.module.css'
import icon_growth from '../../../Img/Icons/bar-chart1.png'
import icon_help from '../../../Img/Icons/hand1.png'
import icon_serv from '../../../Img/Icons/help1.png'

function ServicesInfoBox() {
    return (
        <>
        <div className={myclass.element}>
        <img src={icon_growth} alt="icon"/> 
            <p>Business development, using right technologies to fulfill the market and customer needs</p>
        </div>
        <div className={myclass.element}>
        <img src={icon_help} alt="icon"/> 
        <p>Assistance founding new companies, attracting investors and couching of the managenment </p>
        </div>
        <div className={myclass.element}>
        <img src={icon_serv} alt="icon"/> 
        <p>Interrim management at company level, R&D activities and project management</p>
        </div>
        </>
    )
}

export default ServicesInfoBox
