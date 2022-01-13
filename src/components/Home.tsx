import React from "react";
import First from "./First";
import TopButton from './topButton';
import Next from "./Next";
import Stepper from "./step";

const datas = "创建集群"
class Home extends React.Component {
  render() {
    return (
      <div>
        <div>
            <TopButton data={datas}></TopButton>
          </div>
        <div>
          <Stepper />
        </div>
        <div>
          <First />
        </div>

      </div>
    )
  }
}

export default Home