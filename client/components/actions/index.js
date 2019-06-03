import {UPDATE_RESUME} from './types'
import CONFIG from '../../../config'
import axios from 'axios'

export const updateResume = ()=>{
       return (dispatch)=>{
           dispatch({
              type: UPDATE_RESUME,
              payload: null
           })
       }
}
// export const authUser = (user)=>{
//           return async (dispatch)=>{
//                  const token = localStorage.getItem(CONFIG.ACCESS_TOKEN);
//                  let err = null, result = null;
//                  if(token){
//                      try{
//                         let {data} = await axios.post(`${CONFIG.API_URL}/api/validate`, {}, {
//                             headers:{
//                                 [CONFIG.ACCESS_TOKEN] : token
//                             }
//                         });
//                         result = data;
//                         console.log(user)
//                      }catch(e){
//                          err = e.response.data.error
//                      }
//                  }
//                  if(!result){
//                     await gapi.auth2.getAuthInstance().signOut();
//                  }
//                  dispatch({
//                      type: AUTH_USER,
//                      payload: result
//                  })
//           }    
// } 

// export const loginUser = ({email, password}, cb)=>{
//           return async (dispatch)=>{
//                  let err = null, result = null;
//                  try{
//                      let {data} = await axios.post(`${CONFIG.API_URL}/api/login`, {email, password});
//                          result = {user : data.data, token: data.token}; 
//                  }catch(e){
//                      err = e.response.data.error;
//                  }
//                  dispatch({
//                      type: LOGIN_USER,
//                      payload: result
//                  })
//                  cb(err)
//           }
// }


// export const addUser = ({usrname, email, password}, cb)=>{
//         return async (dispatch)=>{
//                  let err = null, result = null;
//                  try{
//                      let {data} = await axios.post(`${CONFIG.API_URL}/api/users`, {name: usrname, email, password});
//                          result = {user : data.data, token: data.token}; 
//                  }catch(e){
//                      err = e.response.data.error;
//                  }
//                  dispatch({
//                      type: ADD_USER,
//                      payload: result
//                  })
//                  cb(err);
//         }
// } 


// export const socialLogin = ({email, account_type}, cb)=>{
//         console.log(email)
//         return async (dispatch)=>{
//                  let err = null, result = null;
//                  try{
//                      let {data} = await axios.post(`${CONFIG.API_URL}/api/social-login`, {email, account_type});
//                          result = {user : data.data, token: data.token}; 
//                          console.log(data);
//                  }catch(e){
//                      err = e.response.data.error;
//                  }
//                  dispatch({
//                      type: ADD_USER,
//                      payload: result
//                  })
//                  cb(err);
//         }
// } 

// export const logoutUser = ({user}, cb)=>{
//           return async (dispatch)=>{
//                  localStorage.removeItem(CONFIG.ACCESS_TOKEN);
//                  if(user.account_type>0){
//                     gapi.auth2.getAuthInstance().signOut().then(function () {
//                        console.log('User signed out.');
//                        dispatch({
//                          type: LOGOUT_USER,
//                          payload: null
//                        })
//                     });
//                  }else{
//                      dispatch({
//                          type: LOGOUT_USER,
//                          payload: null
//                      })        
//                  }
//                  //await axios.get(`${CONFIG.API_URL}/api/logout?logout_redirect=${CONFIG.LOGOUT_REDIRECT}`);
//                  cb();
//           }
// }


// export const listSections = ()=>{
//           return async (dispatch)=>{
//                  let err = null, result = [];
//                  try{
//                      let {data} = await axios.get(`${CONFIG.API_URL}/api/list-sections`);
//                           result = data
//                  }catch(e){
//                      err = e.response.data.error;
//                  }
//                  dispatch({
//                      type: SECTIONS_LIST,
//                      payload: result
//                  })
//           }
// }

// export const listPosts = (post_id)=>{
//           console.log("lists posts");
//           return async (dispatch)=>{
//                  let err = null, result = [];
//                  try{
//                      let {data} = await axios.get(`${CONFIG.API_URL}/api/list-posts?post_id=${post_id}`);
//                           result = data.data
//                  }catch(e){
//                      err = e.response.data.error;
//                  }
//                  dispatch({
//                      type: POSTS_LIST,
//                      payload: result
//                  })
//           }
// }

// export const userPosts = (post_type)=>{
//           return async (dispatch)=>{
//                  const token = localStorage.getItem(CONFIG.ACCESS_TOKEN);
//                  let err = null, result = [];
//                  if(token){
//                    try{
//                        let {data} = await axios.post(`${CONFIG.API_URL}/api/user-posts`, {post_type}, {
//                             headers:{
//                                 [CONFIG.ACCESS_TOKEN] : token
//                             }
//                            }
//                          );
//                        result = data.data
//                    }catch(e){
//                        err = e.response.data.error;
//                    }
//                  }else{
//                     result = null;
//                  }
//                  dispatch({
//                      type: POSTS_LIST,
//                      payload: result
//                  })
//           }
// }

// export const uploadS3 = ({url, mime, ext, data64}, cb)=>{
//         console.log(typeof data64)
//         return async ()=>{
//                  const token = localStorage.getItem(CONFIG.ACCESS_TOKEN);
//                  let err = null, result = null;
//                  if(token){
//                      try{
//                          let {data} = await axios.post(`${CONFIG.API_URL}/api/upload-s3`, {url, mime, ext, data64}, {
//                             headers:{
//                                 [CONFIG.ACCESS_TOKEN] : token
//                             }
//                            }
//                          );
//                          cb(null, data) 
//                      }catch(e){
//                          err = e.response.data.error;
//                          cb(err, null)
//                      }
//                  }else{
//                     err = CONFIG.ERROR[code];
//                     cb(err, null)
//                  }
//         }
// }

// export const uploadAll = ({uploadedURL, postSlug, postTitle, postTags, postSection, postMime, postNSFW}, cb)=>{
//         return async ()=>{
//                  const token = localStorage.getItem(CONFIG.ACCESS_TOKEN);
//                  let err = null, result = null;
//                  if(token){
//                      try{
//                          let {data} = await axios.post(`${CONFIG.API_URL}/api/upload-post`,
//                             {uploadedURL, postSlug, postTitle, postTags, postSection, postMime, postNSFW}, 
//                             {
//                             headers:{
//                                 [CONFIG.ACCESS_TOKEN] : token
//                             }
//                            }
//                          );
//                          cb(null, data) 
//                      }catch(e){
//                          console.log(e)
//                          //err = e.response.data.error;
//                          cb(err, null)
//                      }
//                  }else{
//                     err = CONFIG.ERROR[code];
//                     cb(err, null)
//                  }
//         }
// }

// export const setDefaultState = (state)=>{
//        return (dispatch)=>{
//                  dispatch({
//                      type: DEFAULT_STATE,
//                      payload: state
//                  })
//        }
// }


// export const changepostPoints = (post_id, flag, cb)=>{
//         return async ()=>{
//                  const token = localStorage.getItem(CONFIG.ACCESS_TOKEN);
//                  let err = null, result = null;
//                  if(token){
//                      try{
//                          let {data} = await axios.post(`${CONFIG.API_URL}/api/post-points`, {post_id, flag}, {
//                             headers:{
//                                 [CONFIG.ACCESS_TOKEN] : token
//                             }
//                            }
//                          );
//                          cb(null, data) 
//                      }catch(e){
//                          err = e.response.data.error;
//                          cb(err, null)
//                      }
//                  }else{
//                     err = CONFIG.ERROR[code];
//                     cb(err, null)
//                  }
//         }
// }



// export const postComments = (post_id, text, cb)=>{
//         return async ()=>{
//                  const token = localStorage.getItem(CONFIG.ACCESS_TOKEN);
//                  let err = null, result = null;
//                  console.log()
//                  if(token){
//                      try{
//                          let {data} = await axios.post(`${CONFIG.API_URL}/api/post-comments`, {post_id, text}, {
//                             headers:{
//                                 [CONFIG.ACCESS_TOKEN] : token
//                             }
//                            }
//                          );
//                          cb(null, data) 
//                      }catch(e){
//                          err = e.response.data.error;
//                          cb(err, null)
//                      }
//                  }else{
//                     err = CONFIG.ERROR[code];
//                     cb(err, null)
//                  }
//         }
// }



// export const listComments = (post_id, cb)=>{
//         return async ()=>{
//                  const token = localStorage.getItem(CONFIG.ACCESS_TOKEN);
//                  let err = null, result = null;
//                  if(token){
//                      try{
//                          let {data} = await axios.post(`${CONFIG.API_URL}/api/list-comments`, {post_id}, {
//                             headers:{
//                                 [CONFIG.ACCESS_TOKEN] : token
//                             }
//                            }
//                          );
//                          cb(null, data['data']) 
//                      }catch(e){
//                          err = e.response.data.error;
//                          cb(err, null)
//                      }
//                  }else{
//                     err = CONFIG.ERROR[code];
//                     cb(err, null)
//                  }
//         }
// }


// export const listEmojis = ()=>{
//           return async (dispatch)=>{
//                  let err = null, result = [];
//                  try{
//                      let {data} = await axios.get(`${CONFIG.API_URL}/api/list-emojis`);
//                           result = data.data
//                  }catch(e){
//                      err = e.response.data.error;
//                  }
//                  dispatch({
//                      type: EMOJIS_LIST,
//                      payload: result
//                  })
//           }
// }









