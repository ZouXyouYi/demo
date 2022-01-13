import React from "react";
import {
  ArrowLeftOutlined
} from '@ant-design/icons';

export default function topButton(props:any) {
  const {data } =props

  return (
      <div className="">
          <ArrowLeftOutlined />
          <h6 style={{color:"black"}}>{data}</h6>
          {
            console.log(props)
          }
      </div>
  );

}

