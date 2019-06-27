import React, {Component, Fragment} from 'react';
import CommonClass from '../CommonClass'
import CONFIG from '../../../config'
import {connect} from 'react-redux'
import * as actions from '../actions'

class Summary extends CommonClass(Component){
      state = {
         loading : 0, success :0
      }
      onSubmitForm = (e)=>{
             e.preventDefault();
             const user_summary = e.target.elements.user_summary.value;
             if(!this.validateInputs(e.target.elements, {user_summary})){
                return;
             }
             this.setState({loading: 1})
             this.props.updateResume({user_summary}, 1, ()=>{
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
             <div className="resume_section resume_summary">
                      <div className="section_heading uppercase">
                           professional summary
                      </div>
                      <div className="resume-content">
                          <div>{this.props.resume_data && this.props.resume_data.summary}</div>
                      </div>
                      <div className="edit-section">
                          <a href="#" className="color-edit" data-model="#summary_modal" onClick={this.openModel}><i className="icon wb-edit"></i></a>
                      </div>
             </div>
   		         <div className="model-backdrop display-none" id="summary_modal">
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
                               <h3 className="uppercase">professional summary</h3>
                            <a href="#" data-model="#summary_modal" className="close-model" id="close_summary_modal" onClick={this.closeModel}>
                                <svg className="svg-icons-20 pointer" viewBox="0 0 612 612">
                                              <use href="/icons/sprites.svg#croos_icon" />
                                </svg>
                            </a>
                           </header>
                           <main>
                              <div className="margin-top-5">
                                  <div className="font-16 color-90949c">Update your professional summary</div>
                                  <form method="post"  className="model-form" onSubmit={this.onSubmitForm}>
                                  <div className="margin-top-15">
                                       <input type="text" className="model-input font-16" name="user_summary" placeholder="Explain a little bit about your role" />
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

export default connect(state=>state, actions)(Summary);
