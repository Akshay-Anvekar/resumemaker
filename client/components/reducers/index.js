import {combineReducers} from 'redux'
import {updateResume} from './reducers'

export default combineReducers({
	  resume_data: updateResume
})