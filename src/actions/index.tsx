import { MODLOCATION, MODLOCATION_TYPE, MODNAME, MODNAME_TYPE } from '../store/const'

export interface MODNAMEAction {
  name:string,
  type: MODNAME_TYPE;
}

export interface MODLOCATIONAction {
  locationName:string,
  type: MODLOCATION_TYPE;
}

// 定义 modifyAction 类型，包含 MODNAMEAction 和 MODLOCATIONAction 接口类型
export type ModifyAction = MODNAMEAction | MODLOCATIONAction;


// 修改名称的方法
export const modname = (value:string): MODNAMEAction => ({
  name:value,
  type: MODNAME,
})

// 修改地点的方法
export const modlocation = (value:string): MODLOCATIONAction => ({
  locationName:value,
  type: MODLOCATION
})