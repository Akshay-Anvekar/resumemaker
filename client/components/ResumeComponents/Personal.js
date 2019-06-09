import React, {Component, Fragment} from 'react';
import CommonClass from '../CommonClass'
import CONFIG from '../../../config'
import {connect} from 'react-redux'
import * as actions from '../actions'

class Personal extends CommonClass(Component){
	  state = {
	  	 loading : 0, success :0
	  }
	  onSubmitForm = (e)=>{
           e.preventDefault();
           const user_name = e.target.elements.user_name.value,
                 user_email = e.target.elements.user_email.value,
                 user_phone = e.target.elements.user_phone.value,
                 user_address = e.target.elements.user_address.value;
           if(!this.validateInputs(e.target.elements, {user_name, user_email, user_phone})){
              return;
           }
           this.setState({loading: 1})
           this.props.updateResume({user_name, user_phone, user_email, user_address}, 0, ()=>{
           	    this.setState({success:1})
           	    setTimeout(()=>{
	           	    this.closeAllModel();
	                this.setState({loading: 0, success: 0})
           	    }, 1500)
           });
	  }
      render(){
      	 return(
           <Fragment>
                <div className="resume_section section-border resume_personal">
                      <div className="name-section uppercase">
                      	  himanshu savita
                      </div>
                      <div className="txt-right margin-ryt-30">
                      	  <div>8299852138</div>
                      	  <div>Cras id dui. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, Bangalore, KA, 560017</div>
                      	  <div>sunny@gmail.com</div>
                      </div>
                      <div className="edit-section">
                      	  <a href="#" className="color-edit" data-model="#personal_model" onClick={this.openModel}><i className="icon wb-edit"></i></a>
                      </div>
		         </div>
   		         <div className="model-backdrop display-none" id="personal_model">
                      <div className="model-box">
                           {this.state.loading==1 &&                            
                               <div className="loading-cover">
                                {this.state.success==1
	                                ? <svg className="svg-success-80" viewBox="0 0 426.667 426.667">
	                                              <use href="/icons/sprites.svg#success_completed" />
	                                  </svg>
	                                : <img className="svg-icons-loading" src="/icons/loading.svg"/>
	                            }
                               </div>
                           }
                           <header className="flex">
                               <h3 className="uppercase">personal information</h3>
                            <a href="#" data-model="#personal_model" className="close-model" id="close_model" onClick={this.closeModel}>
                                <svg className="svg-icons-20 pointer" viewBox="0 0 612 612">
                                              <use href="/icons/sprites.svg#croos_icon" />
                                </svg>
                            </a>
                           </header>
                           <main>
                              <div className="margin-top-5">
                                  <div className="font-16 color-90949c">Update your basic information</div>
                                  <form method="post"  className="model-form" onSubmit={this.onSubmitForm}>
                                  <div className="margin-top-15">
                                       <input type="text" className="model-input font-16 capitalize" name="user_name" placeholder="Your full name" />
                                  </div>
                                  <div className="margin-top-15">
                                       <input type="text" className="model-input font-16 capitalize" name="user_phone" placeholder="Your contact no" />
                                  </div>
                                  <div className="margin-top-15">
                                       <input type="text" className="model-input font-16" name="user_email" placeholder="Yout email" />
                                  </div>
                                  <div className="margin-top-15">
                                       <input type="text" className="model-input font-16 capitalize" name="user_address" placeholder="Your current address" />
                                  </div>
                                  <div className="margin-top-15 txt-center">
                                       <button type="submit" className="uppercase btn btn-default font-16">save</button>
                                  </div>
                                  </form>
                              </div>
                           </main>
                           <footer></footer>
                      </div>
                 </div>
           </Fragment>
      	 )
      }
}

export default connect(state=>state, actions)(Personal);
