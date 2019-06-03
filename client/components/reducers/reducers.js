import {UPDATE_RESUME} from '../actions/types'

// export const authReducer = (state=false, action)=>{
// 	   switch(action.type){
// 	   	 case AUTH_USER:
// 	   	  return action.payload;
//          break;
// 	   	 default: 
// 	   	  return state;
// 	   }
// } 

export const updateResume = (state=null, action)=>{
		switch(action.type){
	   	   case UPDATE_RESUME:
	   	     return action.payload;
	   	   default: 
	   	    return state;
	    }
} 


// export const sectionsReducer = (state=[], action)=>{
// 		switch(action.type){
// 	   	   case SECTIONS_LIST:
// 	   	     return action.payload;
// 	   	   default: 
// 	   	    return state;
// 	    }
// } 

// export const postsReducer = (state=null, action)=>{
// 		switch(action.type){
// 	   	   case POSTS_LIST:
// 	   	     return action.payload;
// 	   	   default: 
// 	   	    return state;
// 	    }
// } 

// export const emojisReducer = (state=[], action)=>{
// 		switch(action.type){
// 	   	   case EMOJIS_LIST:
// 	   	     return action.payload;
// 	   	   default: 
// 	   	    return state;
// 	    }
// } 

// export const defaultReducer = (state=1, action)=>{
// 		switch(action.type){
// 	   	   case DEFAULT_STATE:
// 	   	     return action.payload;
// 	   	   default: 
// 	   	    return state;
// 	    }
// } 


