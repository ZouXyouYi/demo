import React from 'react';
import './realstep.css'

export enum LineMode {
    Left,
    Right,
    NoLine,
    JustLine,
}

export default function realStep(props: any) {
    const { data, lineMode, stepNum,  isActive } = props
    return (
        <>
            <div className={['content',  isActive ? 'isActive' : ''].join(' ')}>
                        <div className="info">
                            {lineMode === LineMode.Left ? <div className="line"></div> : null}
                            <div className="stepNum" >{stepNum}</div>
                            <div className="stepName">{data.name}
                            </div>
                            {lineMode === LineMode.Right ? <div className="line"></div> : null}
                        </div>
            </div>
        </>
    );

}

