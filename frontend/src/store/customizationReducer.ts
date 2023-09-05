// project imports
import config from '../config';

// action - state management
import * as actionTypes from './actions';
import {CustomizationActionTypes} from '../store/actions'

//interface
interface CustomizationState{
  
  isOpen: string[], // for active default menu
  defaultId: string,
  fontFamily: string,
  borderRadius: number,
  opened: boolean
}

//Now you can use this Cuatomization type in you typescript file
export const initialState:CustomizationState = {
  isOpen: [], // for active default menu
  defaultId: 'default',
  fontFamily: config.fontFamily,
  borderRadius: config.borderRadius,
  opened: true
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const customizationReducer = (state = initialState, action:CustomizationActionTypes):CustomizationState => {
  let id;
  switch (action.type) {
    case actionTypes.MENU_OPEN:
      id = action.id;
      return {
        ...state,
        isOpen: [id]
      };
    case actionTypes.SET_MENU:
      return {
        ...state,
        opened: action.opened
      };
    case actionTypes.SET_FONT_FAMILY:
      return {
        ...state,
        fontFamily: action.fontFamily
      };
    case actionTypes.SET_BORDER_RADIUS:
      return {
        ...state,
        borderRadius: action.borderRadius
      };
    default:
      return state;
  }
};

export default customizationReducer;
