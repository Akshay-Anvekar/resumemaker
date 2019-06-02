import React, {Component, Fragment} from 'react';
import CommonClass from '../CommonClass'
import CONFIG from '../../../config'
import {connect} from 'react-redux'
import * as actions from '../actions'

class Personal extends CommonClass(Component){
      state = {
         addExpBox : [],
         addNewCollege : []
      }
      componentDidMount(){
         this.addMoreCompanies();
      }
      addMoreCompanies = async ()=>{
         const addedId = this.state.addNewCollege;
         addedId.push(this.randomString())
         await this.setState({
             addNewCollege: addedId
         });
         document.getElementById('list-educations').scrollTop = document.getElementById('list-educations').scrollHeight;
         return false;   
      }
      onFormSubmit(){
          return false;
      }
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
                      <div className="model-box model-width-700">
                           <header className="flex">
                               <h3 className="uppercase">educational details</h3>
                               <a href="#" data-model="#education_model" id="close_educationmodel" onClick={this.closeModel}>
                                 <svg className="svg-icons-20 pointer" viewBox="0 0 612 612">
                                              <use href="/icons/sprites.svg#croos_icon" />
                                 </svg>
                               </a>
                           </header>
                           <main>
                              <div className="margin-top-5">
                                  <div className="font-16 margin-botm-5 color-90949c">Update your educational details</div>
                                  <form method="post" onSubmit={this.onFormSubmit}>
                                   <div className="list-exps" id="list-educations">
                                       {this.state.addNewCollege.length>0 &&
                                        this.state.addNewCollege.map((college_result, index)=>{
                                             return (
                                                 <div className="flex space-bw company-list-box margin-top-15 border-botm-light" key={college_result}>
                                                        <div className="padding-top-10">{index+1}. </div>
                                                        <div className="width-90pr">
                                                            <div className="flex space-bw margin-botm-15">
                                                                   <input type="text" className="model-input font-16 capitalize margin-ryt-25" name="edit_name" placeholder="Your Degree" />
                                                                   <input type="text" className="model-input font-16 capitalize" name="edit_email" placeholder="Your College" />
                                                            </div>
                                                            <div className="flex space-bw margin-botm-15">
                                                                 <input type="text" className="model-input font-16 capitalize margin-ryt-25" name="edit_pic" placeholder="State" />
                                                                 <input type="text" className="model-input font-16 capitalize" name="edit_pic" placeholder="Year of passing" />
                                                            </div>
                                                            <div className="flex space-bw margin-botm-15">
                                                                 <input type="text" className="model-input font-16 capitalize" name="edit_pic" placeholder="University" />
                                                            </div>
                                                        </div>
                                                        <div className="padding-top-10">
                                                             <span className="margin-lft-10"><a className="" onClick={(e)=>this.removeGeneratedTag(e, this.state.addNewCollege, college_result, 'addNewCollege')}><i className="icon wb-trash color-trash font-18"></i></a></span>
                                                        </div>
                                                  </div>
                                             )
                                        })}
                                    </div>
                                  <div className="margin-top-15 txt-right">
                                       <button type="button" className="uppercase btn btn-default font-16" onClick={this.addMoreCompanies}><i className="icon wb-plus padding-ryt-10"></i>add more college details</button>
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
