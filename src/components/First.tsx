import { Button, Radio } from "antd";
import React from "react";
import Next from "./Next";
import './First.css';
import { ModifyAction, modlocation, modname } from "../actions";
import { storeState } from "../type";
import { Dispatch } from 'redux';

interface State {
  page: Boolean,
  flag:Boolean,
  buttonFlag:number//0什么都不干  1取消  2下一步
}
export interface Props{
  msg:storeState,
  getFirstMsg:(Msg:storeState)=>void,
    modName:(name:string)=>ModifyAction
    modLocation:(name:string)=>ModifyAction
}
class First extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      page: true,
      flag: false,
      buttonFlag:0
    }
    this.LocationChange = this.LocationChange.bind(this)
    this.Inputchange = this.Inputchange.bind(this)
    // this.Kubchange = this.Kubchange.bind(this)
    // this.conChange1 = this.conChange1.bind(this)
    // this.conChange2 = this.conChange2.bind(this)
    // this.conChange5 = this.conChange5.bind(this)
    // this.conChange3 = this.conChange3.bind(this)
    // this.conChange4 = this.conChange4.bind(this)
    // this.OperationChange = this.OperationChange.bind(this)
  }

  toHome = () => {//向父组件Home传参
    // console.log(this.props.parent.getChildrenMsg.bind(this, this.state.msg))
    this.props.getFirstMsg(this.props.msg)
  }
  LocationChange(e: any) {
    if (e.target.value === 'guangzhou') {
      this.setState({
        flag: true,
      })
    } else {
      this.setState({
        flag: false,
      })
    }
    modlocation(e.target.value);
  }
  Inputchange(e: any) {
    modname(e.target.value);
  }
  // Kubchange(e: any) {
  //   const target = Object.assign({}, this.props.msg, {
  //     version: e.target.value
  //   })
  //   this.setState({
  //     msg: target
  //   })
  // }
  // conChange1(e: any) {
  //   const target = Object.assign({}, this.state.msg, {
  //     one: e.target.value
  //   })
  //   this.setState({
  //     msg: target
  //   })
  // }
  // conChange2(e: any) {
  //   const target = Object.assign({}, this.state.msg, {
  //     two: e.target.value
  //   })
  //   this.setState({
  //     msg: target
  //   })
  // }
  // conChange3(e: any) {
  //   const target = Object.assign({}, this.state.msg, {
  //     thr: e.target.value
  //   })
  //   this.setState({
  //     msg: target
  //   })
  // }
  // conChange4(e: any) {
  //   const target = Object.assign({}, this.state.msg, {
  //     four: e.target.value
  //   })
  //   this.setState({
  //     msg: target
  //   })
  // }
  // conChange5(e: any) {
  //   const target = Object.assign({}, this.state.msg, {
  //     five: e.target.value
  //   })
  //   this.setState({
  //     msg: target
  //   })
  //   console.log(this.state)
  // }
  // OperationChange(e: any) {
  //   const target = Object.assign({}, this.state.msg, {
  //     operation: e.target.value
  //   })
  //   this.setState({
  //     msg: target
  //   })
  // }

  render() {
    return (
      // <>
      // {this.state.page ?
      <div>
        <div>
          <div className="all">
            <span>集群名称</span>
          </div>
          <input
            className="inputStyle"
            placeholder="请输入集群名称，不超过50个字符"
            onClick={this.Inputchange}
            value={this.props.msg.name}
          ></input>
        </div>
        <div>
          <div className="all">
            <span>新增资源所属项目</span>
          </div>
          <select>
            <option value="default">默认项目</option>
          </select>
          <p className="line">集群内新增的云服务器、负载均衡器等资源将会自动分配到该项目下。<a href="">使用指南</a></p>
        </div>
        <div>
          <div className="all">
            <span>Kubernetes版本</span>
          </div>
          <select onChange={this.Kubchange}>
            <option value="1.20.6">1.20.6</option>
            <option value="1.18.4">1.18.4</option>
            <option value="1.16.4">1.16.4</option>
          </select>
        </div>
        <Radio.Group>
          <div className="all">
            <span>运行时组件</span>
          </div>
          <Radio.Group className="twoButton">
            <Radio.Button value='docker'  >docker</Radio.Button>
            <Radio.Button value='container' >containerd</Radio.Button>
            <a href="" className="second-line">如何选择</a>
          </Radio.Group>
          <p className="line">dockerd是社区版运行时组件，支持docker api</p>
        </Radio.Group>
        <div>
          <div className="all">
            <span>所在地域</span>
          </div>
          <Radio.Group className="twoButton" onChange={this.LocationChange}>
            <Radio.Button value='guangzhou' >广州</Radio.Button>
            <Radio.Button value='shanghai'>上海</Radio.Button>
            <Radio.Button value='hongkong' >中国香港</Radio.Button>
            <Radio.Button value='Toronto' >多伦多</Radio.Button>
            <Radio.Button value='beijing' >北京</Radio.Button>
            <Radio.Button value='Singapore' >新加坡</Radio.Button>
            <Radio.Button value='siliconvalley ' >硅谷</Radio.Button>
            <Radio.Button value='cengdu' >成都</Radio.Button>
            <Radio.Button value='fa'  >法兰克福</Radio.Button>
            <Radio.Button value='shou' >首尔</Radio.Button>
            <Radio.Button value='chongqing'  >重庆</Radio.Button>
            <Radio.Button value='mengmai' >孟买</Radio.Button>
            <br />
            <Radio.Button value='f'  >弗吉尼亚</Radio.Button>
            <Radio.Button value='man' >曼谷</Radio.Button>
            <Radio.Button value='mo'  >莫斯科</Radio.Button>
            <Radio.Button value='dong' >东京</Radio.Button>
            <Radio.Button value='nanjing'  >南京</Radio.Button>
            <Radio.Button value='ya' >雅加达</Radio.Button>
          </Radio.Group>
          <p className="line">处在不同地域的云产品内网不通，购买后不能更换。建议选择靠近您客户的地域，以降低访问延时、提高下载速度。<a href="">现在新建</a></p>
        </div>
        <div>
          <div className="all">
            <span>集群网络</span>
          </div>

          {this.state.flag ?
            <>
              <select>
                <option value="Internet" >国际化</option>
              </select>
              <p className="line">如现有的网络不合适，您可以去控制台<a href="">新建私有网络</a></p>

            </> : <>
              <select disabled>
                <option value="no" >请选择集群网络</option>
              </select>
              <p className="line">容器集群运行在安全隔离的私有网络，您还没有私有网络，</p>
            </>
          }


        </div>
        <div>
          <div className="all">
            <span>容器网络插件</span>
          </div>
          <div className="twoButton">
            <Button value='Global' >Global Router</Button>
            <Button value='VPC' disabled>VPC-CNI </Button>
          </div>
          <div>
            <p className="line">Global Router是腾讯云TKE基于VPC路由实现的容器网络插件，可设置独立平行于VPC的容器网段。</p>
          </div>
        </div>
        <div>
          <div className="all">
            <span>容器网络</span>
          </div>
          <div className="containnet">
            <div>
              <span className="con">CIDR</span>
              <select style={{ width: '70px' }} onChange={this.conChange1}>
                <option value="num1" >172</option>
                <option value="num2" >10</option>
                <option value="num3" >192</option>
              </select>
              <input value="16" style={{ width: '50px' }} onChange={this.conChange2}></input>
              <input value="0" style={{ width: '50px' }} onChange={this.conChange3} disabled></input>
              <input value="0" style={{ width: '50px' }} onChange={this.conChange4} disabled></input>
              <span>/</span>
              <select style={{ width: '70px' }} onChange={this.conChange5}>
                <option value="c1" >16</option>
                <option value="c2" >17</option>
                <option value="c3" >18</option>
              </select>
            </div>

            <p className="line">创建后不能修改。</p>
          </div>
        </div>

        <div>
          <br />

          <div className="all">
            <span>节点Pod分配方式</span>
          </div>

          <div className="containnet">
            <div>
              <div>
                <span className="con">单节点Pod数量上限</span>
                <select style={{ width: '70px' }}>
                  <option value="num" >172</option>
                  <option value="2" >10</option>
                  <option value="3" >192</option>
                </select>
              </div>
              <div>
                <span className="con">集群内Service数量上限</span>
                <select style={{ width: '70px' }}>
                  <option value="num" >172</option>
                  <option value="2" >10</option>
                  <option value="3" >192</option>
                </select>
              </div>
            </div>
          </div>

        </div>

        <div>
          <div className="all">
            <span>操作系统</span>
          </div>
          <select onChange={this.OperationChange}>
            <option value="1" >TencentOS Server3.1（TK）</option>
            <option value="2" >TencentOS Server2.4（TK）</option>
            <option value="3" >TencentOS Server1.1（TK）</option>
          </select>
        </div>
        <div>
          <div className="all">
            <span>集群描述</span>
          </div>
          <textarea placeholder="请输入集群描述"></textarea>
        </div>
      </div>

    )
  }
}

// export default connect(First);
export default First