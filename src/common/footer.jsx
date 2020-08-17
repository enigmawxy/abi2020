import React from 'react'
import './footer.scss'
import logo from '../img/logo.png';
import alibaba from '../img/alibaba.jpg';
import aliyun from '../img/aliyun.png';

export default function Footer(props) {
    return (
        <div className='footer'>
            <div className='footer-left'>
                <p><img src={logo} alt=''/></p>
                <p>站点地图 | 关于我们 | 意见反馈 | 免责声明</p>
                <p>合作伙伴</p>
                <p><img src={alibaba} alt=''/><img src={aliyun} alt=''/></p>
            </div>
            <div className='footer-right'>
                <p>友情链接</p>
                <p>腾讯财经 雷锋网 艾瑞网 站长之家 搜狐IT 百度 阿里巴巴 阿里云</p>
                <p>版权所有©淮安菜鸟信息技术有限公司</p>
                <p>公司地址：淮安市清浦区承德南路266号</p>
                <p>联系电话：13651543460 公司网址：www.haitcn.com</p>
            </div>
        </div>
    )    
}