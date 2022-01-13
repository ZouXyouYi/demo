import React from "react";

interface Props {
  name: string,
  version: String,
  location: String,
  one: 172,
  two: 16,
  thr: 0,
  four: 0,
  five: 16
  operation: String,
}
class Next extends React.Component<Props>{
  constructor(props: Props) {
    super(props);

  }
  render() {
    return (
      <div>
        <p>已选配置</p>
        <div>
          <span>集群名</span>{this.props.name}
        </div>
        <div>
          <span>Kubernetes版本</span>{this.props.version}
        </div>
        <div>
          <span>所在地域</span>{this.props.location}
        </div>
        <div>
          <span>容器网络</span>{this.props.one + this.props.two +
            this.props.thr + this.props.four + this.props.five}
        </div>
        <div>
          <span>操作系统</span>{this.props.operation}
        </div>
      </div>
    )
  }
}

export default Next