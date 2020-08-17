import React from 'react'
import './header.scss'
import logo from '../img/logo.jpg'

export default function Header(props) {
    return (
        <div className='header'> 
            <ul>
                <li><img src={logo} alt='' className='logo'></img></li>
                <li><a href='#'>首页</a></li>
                <li><a href='#'>成本曲线</a></li>
                <li><a href='#'>每日成本</a></li>
                <li><a href='#'>实时监控</a></li>
                <li><a href='#'>电量误差</a></li>
            </ul>
        </div>
    )    
}