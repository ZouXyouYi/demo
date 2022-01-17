import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { modname,modlocation } from '../actions';
import First from '../components/First';
import { storeState } from '../type';


// 将 reducer 中的状态插入到组件的 props 中
const mapStateToProps = (state: storeState,name:string): { name: string } => ({
    name: state.name
})

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (dispatch: Dispatch) => ({
    modname: (name:string) => dispatch(modname(name)),
    modlocation: (locationName:string) => dispatch(modlocation(locationName))
})

// 使用 connect 高阶组件对 Counter 进行包裹
export default connect(mapStateToProps, mapDispatchToProps)(First);
