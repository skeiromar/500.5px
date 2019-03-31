import {combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import PictureEditReducer from './picture_edit_reducer';

export default combineReducers({
    session: SessionErrorsReducer,
    edit: PictureEditReducer
})