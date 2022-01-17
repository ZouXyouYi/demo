import { Radio } from "antd";
import React from "react";
import './First.css';

interface Props {
  msg: {
    name: any,
    version: any,
    location: any,
    one: number,
    two: number,
    thr: number,
    four: number,
    five: number,
    operation: any
  }
}
interface State{
  source:any,
  master:any,
  worker:any,
  count:any
}
class Next extends React.Component<Props,State>{
  constructor(props: Props) {
    super(props);
    this.state={
      source:'0',
      master:'2',
      worker:'4',
      count:'6'
    }
  }
  render() {
    return (
      <div>
        <div>
          <p>已选配置</p>
          <div className="all">
            <span>集群名</span>
            {this.props.msg.name}
          </div>
          <div className="all">
            <span>Kubernetes版本</span>{this.props.msg.version}
          </div>
          <div className="all">
            <span>所在地域</span>{this.props.msg.location}
          </div>
          <div className="all">
            <span>容器网络</span>{this.props.msg.one + this.props.msg.two +
              this.props.msg.thr + this.props.msg.four + this.props.msg.five}
          </div>
          <div className="all">
            <span>操作系统</span>{this.props.msg.operation}
          </div>
        </div>

        <div>
          <div>
            <div className="all">
              <span>节点来源</span>
            </div>
            <Radio.Group className="twoButton">
              <Radio.Button value='1'>新增节点</Radio.Button>
              <Radio.Button value='0' >已有节点</Radio.Button>
            </Radio.Group>
          </div>
          <div className="all">
            <span>Master节点</span>
          </div>
          <Radio.Group className="twoButton">
            <Radio.Button value='2'>托管节点</Radio.Button>
            <Radio.Button value='3' >独立集群</Radio.Button>
          </Radio.Group>
          <p className="line">默认集群的Master、Etcd等组件由腾讯云提供维护和服务；为了方便管理，您也可以购买CVM部署Master，详情请参考<a href="">《集群托管模式说明》</a></p>
        </div>
        <div>
            <div className="all">
              <span>Worker节点</span>
            </div>
            <Radio.Group className="twoButton">
              <Radio.Button value='4'>立即部署</Radio.Button>
              <Radio.Button value='5' >暂不部署</Radio.Button>
            </Radio.Group>
          </div>
          <div>
            <div className="all">
              <span>计费模式</span>
            </div>
            <Radio.Group className="twoButton">
              <Radio.Button value='6'>按量计费</Radio.Button>
              <Radio.Button value='7' >包年包月</Radio.Button>
            </Radio.Group>
          </div>
          {
            this.state.source==='0'?
            <div>
               <div>
            <div className="all">
              <span>可用区</span>
            </div>
            <Radio.Group className="twoButton">
              <Radio.Button value='6'>广州三区</Radio.Button>
              <Radio.Button value='7' >广州四区</Radio.Button>
            </Radio.Group>
          </div>
            </div>
            :
            <div>

            </div>
          }


      </div>

    )
  }
}

export default Next