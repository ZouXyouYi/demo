import { combineReducers } from 'redux'
import { ModifyAction } from '../actions'
import { MODLOCATION, MODNAME } from '../store/const'
import {storeState} from '../type/index'


function nameFirst(state : storeState, action: ModifyAction): storeState
{
  switch (action.type) {
    case MODNAME:
      return {
        ...state,  name:action.name
      }
    case MODLOCATION:
      return{
        ...state, location:action.locationName
      }
    default:
      return state
  }
}

export default nameFirst;