import React from "react";
import First from "./First";
import Next from "./Next";
import Stepper from "./step";

class Home extends React.Component{
  render(){
      return(
        <div>
          <div>
            <Stepper/>
          </div>
          <div>
             <First/>
          </div>

        </div>
      )
  }
}

export default Home