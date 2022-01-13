import React from 'react';
import Realstep, { LineMode } from './realstep'
import './step.css'

export default function stepper() {
    const data = [
        {
            "name": "集群信息",
              "value": 1


        },
        {
            "name": "选择机型",
              "value": 0
        }

    ]

    return (
        <div className="container">
            <Realstep data={data[0]} lineMode={LineMode.Right}  stepNum={1} isActive={data[0].value === 1} />
            <Realstep data={data[1]} lineMode={LineMode.Left}  stepNum={2} isActive={data[1].value === 1} />
        </div>
    );

}

