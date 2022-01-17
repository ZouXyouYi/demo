import { Button } from "antd";
import React from "react";

interface Props{
  flag:number//0什么都不干  1取消  2下一步
}
export default class BottomButton extends React.Component<Props,any>{
  constructor(props:Props){
    super(props);

  }
  render(){
    return(
      <div>
        <Button type="dashed">取消</Button>
        <Button type="dashed">下一步</Button>
      </div>
    )
  }
}