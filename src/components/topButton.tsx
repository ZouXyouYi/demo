import React from "react";
import {
  ArrowLeftOutlined
} from '@ant-design/icons';

interface Props{
  data:string
}

export default function topButton(props:Props) {

  return (
      <div style={{display:'inline-block'}}>
          <ArrowLeftOutlined/>
          <h6 style={{color:"black"}}>{props.data}</h6>
      </div>
  );

}

