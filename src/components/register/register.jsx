import React from 'react'
import Header from '../../common/header'
import Footer from '../../common/footer'
import Content from './content'
import './register.scss'

export default function Register(props) {
    return (
        <div className="register">
            <div className="register-header"><Header/></div>
            <div className="register-content"><Content/></div>
            <div className="register-footer"><Footer/></div>
        </div>
    )    
}