import React from 'react'
import logo from '../../img/bi.png'
import './login.scss'

export default function Login(props) {

    return (
        <div className="login">
            <p><img src={logo} alt='' className="logo"/></p>
            <p className="oneTitle">注册华鼎数据，随时掌握最新数据</p>
            <p className="grayFont">掌握数据，抢占先机</p>
            <p><input type="text" className="textBox" placeholder=" 请输入用户名或手机号"/></p>
            <p><input type="password" className="textBox" placeholder=" 请输入密码"/></p>
            <p><input type="submit" value="登 陆" className="submitButton"/></p>
            <p className="forgetPwd">忘记密码？</p>
            <p><input type="button" value="没有账号，注册帐号" className="registerButton"/></p>
            <p className="copyright">2018~2020版权所有© 华鼎股份</p>
        </div>
    )
}