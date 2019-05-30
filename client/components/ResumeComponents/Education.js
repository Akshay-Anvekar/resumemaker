import React, {Component, Fragment} from 'react';
import CommonClass from '../CommonClass'
import CONFIG from '../../../config'
import {connect} from 'react-redux'
import * as actions from '../actions'

class Personal extends CommonClass(Component){
      render(){
      	 return(
           <Fragment>
              <div className="resume_section resume_education">
                      <div className="section_heading uppercase">
                          education
                      </div>
                      <div className="resume-content">
                           <div className="education-info-box">
                             <div>
                                 <ul className="inline-items">
                                   <li>
                                    <span className="txt-bold">Master of Arts</span>
                                   </li>
                                   <li className="seperator-dot">
                                    <span className="capitalize txt-itlc">San Jose State University</span>
                                   </li>
                                 </ul>
                              </div>
                              <div>
                                 <ul className="inline-items">
                                   <li>
                                    <span className="capitalize">San Jose State University</span>
                                    <span>, </span>
                                    <span>CA</span>
                                   </li>
                                   <li className="seperator-dot">
                                    <span>2014</span>
                                   </li>
                                 </ul>
                              </div>
                            </div>
                            <div className="education-info-box">
                              <div>
                                 <ul className="inline-items">
                                   <li>
                                    <span className="txt-bold">Bachelor of Arts</span>
                                   </li>
                                   <li className="seperator-dot">
                                    <span className="capitalize txt-itlc">San Jose State University</span>
                                   </li>
                                 </ul>
                              </div>
                              <div>
                                 <ul className="inline-items">
                                   <li>
                                    <span className="capitalize">San Jose State University</span>
                                    <span>, </span>
                                    <span>CA</span>
                                   </li>
                                   <li className="seperator-dot">
                                    <span>2014</span>
                                   </li>
                                 </ul>
                              </div>
                              </div>
                         <div className="education-info-box"></div>
                         <div className="education-info-box"></div>
                      </div>
                      <div className="edit-section">
                          <a href="#" className="color-edit" data-model="#education_model" onClick={this.openModel}><i className="icon wb-edit"></i></a>
                      </div>
               </div>
   		         <div className="model-backdrop display-none" id="education_model">
                      <div className="model-box">
                           <header className="flex">
                               <h3 className="uppercase">personal information</h3>
                            <a href="#" data-model="#education_model" id="close_educationmodel" onClick={this.closeModel}>
                                <svg className="svg-icons-20 pointer" viewBox="0 0 612 612">
                                              <use href="/icons/sprites.svg#croos_icon" />
                                </svg>
                            </a>
                           </header>
                           <main>
                              <div className="margin-top-5">
                                  <div className="font-16 color-90949c">Update your basic information</div>
                                  <form method="post"  className="model-form" onSubmit={this.submitSignup}>
                                  <div className="margin-top-15">
                                       <input type="text" className="model-input font-16 capitalize" name="edit_name" placeholder="Your full name" />
                                  </div>
                                  <div className="margin-top-15">
                                       <input type="text" className="model-input font-16 capitalize" name="edit_email" placeholder="Your contact no" />
                                  </div>
                                  <div className="margin-top-15">
                                       <input type="text" className="model-input font-16 capitalize" name="edit_pic" placeholder="Your current address" />
                                  </div>
                                  <div className="margin-top-15">
                                       <input type="text" className="model-input font-16 capitalize" name="edit_pic" placeholder="Yout email" />
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

export default connect(state=>state, actions)(Personal);
