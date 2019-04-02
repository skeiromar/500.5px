import {combineReducers} from 'redux';
import modalReducer from './modal_reducer';
import pictureIdsReducer from './picture_ids_reducer';

export default combineReducers({
    modal: modalReducer,
    pictureIds: pictureIdsReducer
});