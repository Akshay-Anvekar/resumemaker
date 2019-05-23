import {combineReducers} from 'redux'
import {authReducer, loginReducer, sectionsReducer, postsReducer, emojisReducer, defaultReducer} from './reducers'

export default combineReducers({
	  uploadedState: defaultReducer,
	  auth: loginReducer,
	  sectionsList : sectionsReducer,
	  postsList : postsReducer,
	  emojisList : emojisReducer
})