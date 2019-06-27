import {combineReducers} from 'redux'
import {updateResume} from './reducers'
import CONFIG from '../../../config'

export default combineReducers({
	  resume_data: updateResume
})