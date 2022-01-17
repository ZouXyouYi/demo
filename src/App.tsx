import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import First from './components/First';
import Next from './components/Next';
import TopButton from './components/topButton';
import Stepper from './components/step';
import BottomButton from './components/BottomButton';
import { storeState } from './type';

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
    name: string,
    version: string,
    location: string,
    one: 172,
    two: 16,
    thr: 0,
    four: 0,
    five: 16,
    operation: string
  },
  flag: boolean,
  change: boolean
}
class App extends React.Component<any, States> {
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
      change: false
    }
    this.cancel = this.cancel.bind(this)
    this.next = this.next.bind(this)
    this.click = this.click.bind(this)
    this.getFirstMsg=this.getFirstMsg.bind(this)
  }
  getFirstMsg = ( result: storeState) => {//获取First页面传回来的信息
    console.log( result)
    // history.push("./Next")
    // 很奇怪这里的result就是子组件那bind的第一个参数this，msg是第二个参数
    this.setState({
      childMsg: result,
      change: true
    })

  }
  cancel(e: any) {
    window.location.href = ('./');
  }
  next() {
    return (
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
      <div className="App">
        <BrowserRouter>
        <div className='navi'>
          <h5 style={{ color: 'white' }}>容器服务</h5>
          <ul>
            <li onClick={this.click}><Link to='/First' ><h6 className='side-title'>集群</h6></Link></li>
            {/* <li><Link to='/Home'><h6 className='side-title'>弹性容器</h6></Link></li> */}
          </ul>
        </div>
        <div className='right'>
          <div className='top'>
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
          </div>
          <div className='home'>

              <Routes>
                {/* <Route path='/' element={<App />} /> */}
                <Route path='First' element={<First msg={this.getFirstMsg} />} />
                <Route path='Next' element={<Next msg={this.state.childMsg} />} />
              </Routes>

          </div>
          <div className='bottom'>
            <BottomButton flag={0} />
          </div>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
