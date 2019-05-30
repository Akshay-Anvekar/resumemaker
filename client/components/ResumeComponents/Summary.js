import React, {Component, Fragment} from 'react';
import CommonClass from '../CommonClass'
import CONFIG from '../../../config'
import {connect} from 'react-redux'
import * as actions from '../actions'

class Summary extends CommonClass(Component){
      render(){
      	 return(
           <Fragment>
             <div className="resume_section resume_summary">
                      <div className="section_heading uppercase">
                           professional summary
                      </div>
                      <div className="resume-content">
                          <div>Highly organized and meticulous Administrative Assistant with experience in corporate office settings.Adept at preparing and maintaining files, greeting visitors and restocking supplies. Good communicator and planner with strong judgment and critical thinking abilities.</div>
                      </div>
                      <div className="edit-section">
                          <a href="#" className="color-edit" data-model="#summary_modal" onClick={this.openModel}><i className="icon wb-edit"></i></a>
                      </div>
             </div>
   		         <div className="model-backdrop display-none" id="summary_modal">
                      <div className="model-box">
                           <header className="flex">
                               <h3 className="uppercase">professional summary</h3>
                            <a href="#" data-model="#summary_modal" id="close_summary_modal" onClick={this.closeModel}>
                                <svg className="svg-icons-20 pointer" viewBox="0 0 612 612">
                                              <use href="/icons/sprites.svg#croos_icon" />
                                </svg>
                            </a>
                           </header>
                           <main>
                              <div className="margin-top-5">
                                  <div className="font-16 color-90949c">Update your professional summary</div>
                                  <form method="post"  className="model-form" onSubmit={this.submitSignup}>
                                  <div className="margin-top-15">
                                       <input type="text" className="model-input font-16 capitalize" name="edit_name" placeholder="Your full name" />
                                  </div>
                                  <div className="margin-top-15 txt-center">
                                       <button className="uppercase btn btn-default font-16">save</button>
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
