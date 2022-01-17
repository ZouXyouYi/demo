import React from "react";
import './Home.css';
import First from "./First";
import TopButton from './topButton';
import Next from "./Next";
import Stepper from "./step";
import { Button } from "antd";
import { createBrowserHistory } from 'history';
import { HashRouter, Link, Route, Routes } from 'react-router-dom';

const history = createBrowserHistory();

const datas = {
  pagename: '创建集群',
  location: {
    guangzhou: {
      district: [
        '广州一区',
        '广州二区',
        '广州三区',
        '广州四区'
      ],
      source: '华南地区'
    },
    shanghai: {
      district: [
        '上海二区',
        '上海三区',
        '上海四区',
        '上海五区',
      ],
      source: '华东地区'
    },

  }

}
interface States {
  childMsg: {
    name: "",
    version: "",
    location: "",
    one: 172,
    two: 16,
    thr: 0,
    four: 0,
    five: 16,
    operation: ""
  },
  flag: boolean,
  change:boolean
}
class Home extends React.Component<any, States> {
  constructor(props: any) {
    super(props);
    this.state = {
      childMsg: {
        name: "",
        version: "",
        location: "",
        one: 172,
        two: 16,
        thr: 0,
        four: 0,
        five: 16,
        operation: ""
      },
      flag: false,
      change:false
    }

    this.cancel = this.cancel.bind(this)
    this.next = this.next.bind(this)
    this.click=this.click.bind(this)
  }
  getFirstMsg = (tt: any, result: any) => {//获取First页面传回来的信息
    console.log(tt, result)
    history.push("./Next")
    // 很奇怪这里的result就是子组件那bind的第一个参数this，msg是第二个参数
    this.setState({
      childMsg: result,
      change:true
    })

  }
  cancel(e: any) {
    window.location.href = ('./');
  }
  next() {
    return(
      <Link to='/Next'></Link>
    )
  }
  click() {
    this.setState({
      flag: true
    })
  }
  render() {
    return (
      <div>

        {/* <HashRouter> */}
          <div className='navi'>
            <h5 style={{ color: 'white' }}>容器服务</h5>
            <ul>
              <li onClick={this.click}><Link to='/First' ><h6 className='side-title'>集群</h6></Link></li>
              {/* <li><Link to='/Home'><h6 className='side-title'>弹性容器</h6></Link></li> */}
            </ul>
          </div>
          <div className='right'>

            {this.state.flag ?
              <>
                <div>
                  <TopButton data={datas.pagename}></TopButton>
                </div>
                <div>
                  <Stepper />
                </div>
              </>
              : null
            }
            {/* <Routes>
              <Route path='/' />
              <Route path='/First' element={<First parent={this} />} />
              <Route path='/Next' element={<Next msg={this.state.childMsg} />} />
            </Routes> */}
          </div>
        {/* </HashRouter> */}
      </div>
    )
  }
}

export default Home