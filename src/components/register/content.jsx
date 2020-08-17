import React from 'react'
import './content.scss'

export default function Content(props) {
    return (
        <div className='content'>
            <p className='p_underline'>注册账号<span className='p_span'>已有账号，直接登录</span></p>
            <p><input type="text" className="textBox" placeholder=" 请输入用户名或手机号"/></p>
            <p><input type="password" className="textBox" placeholder=" 请输入密码"/></p>
            <p><input type="submit" value="提交注册" className="submitButton"/></p>
        </div>
    )    
}