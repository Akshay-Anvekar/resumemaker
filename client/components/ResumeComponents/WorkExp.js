import React, {Component, Fragment} from 'react';
import CommonClass from '../CommonClass'
import CONFIG from '../../../config'
import {connect} from 'react-redux'
import * as actions from '../actions'

class WorkExp extends CommonClass(Component){
      state = {
         addExpBox : [],
         addNewCompany : []
      }
      componentDidMount(){
         this.addMoreWorkExp();
         this.addMoreCompanies();
      }
      addMoreWorkExp = ()=>{
         const addedId = this.state.addExpBox;
         addedId.push(this.randomString())
         this.setState({
             addExpBox: addedId
         });
         return false;
      }
      addMoreCompanies = async ()=>{
         const addedId = this.state.addNewCompany;
         addedId.push(this.randomString())
         await this.setState({
             addNewCompany: addedId
         });
         document.getElementById('list_exps').scrollTop = document.getElementById('list_exps').scrollHeight;
         return false;   
      }
      onFormSubmit(){
          return false;
      }
      render(){
      	 return(
           <Fragment>
                <div className="resume_section resume_work">
                      <div className="section_heading uppercase">
                          work history
                      </div>
                      <div className="resume-content">
                        <div className="work-info-box">
                            <div>
                               <ul className="inline-items">
                                 <li>
                                  <span className="txt-bold">Administrative Assistant</span>
                                 </li>
                                 <li className="seperator-dot">
                                  <span className="uppercase txt-itlc">Company A</span>
                                 </li>
                               </ul>
                            </div>
                            <div>
                               <ul className="inline-items">
                                 <li>
                                  <span>San Francisco</span>
                                  <span>, </span>
                                  <span>CA</span>
                                 </li>
                                 <li className="seperator-dot">
                                  <span>02/2017</span>
                                  <span> to </span>
                                  <span>Current</span>
                                 </li>
                               </ul>
                            </div>
                            <div className="margin-lft-35">
                               <ul>
                                 <li>Screened all visitors and directed them to the correct employee or office.</li>
                                 <li>Facilitated organized record retrieval and access.</li>
                                 <li>Organized all new hire, security and temporary paperwork.</li>
                               </ul>
                            </div>
                           </div>
                           <div className="work-info-box">
                            <div>
                               <ul className="inline-items">
                                 <li>
                                  <span className="txt-bold">Customer Service Representative</span>
                                 </li>
                                 <li className="seperator-dot">
                                  <span className="uppercase txt-itlc">Company B</span>
                                 </li>
                               </ul>
                            </div>
                            <div>
                               <ul className="inline-items">
                                 <li>
                                  <span>Berkeley</span>
                                  <span>, </span>
                                  <span>CA</span>
                                 </li>
                                 <li className="seperator-dot">
                                  <span>02/2016</span>
                                  <span> to </span>
                                  <span>02/2017</span>
                                 </li>
                               </ul>
                            </div>
                            <div className="margin-lft-35">
                               <ul>
                                    <li>Asked open-ended questions to assess customer needs.</li>
                                    <li>Scored in top 10% of employees in successful resolution of issues.</li>
                                    <li>Built long-term customer relationships and advised customers on purchases and promotions.</li>
                               </ul>
                            </div>
                           </div>
                           <div className="work-info-box">
                            <div>
                               <ul className="inline-items">
                                 <li>
                                  <span className="txt-bold">Cashier</span>
                                 </li>
                                 <li className="seperator-dot">
                                  <span className="uppercase txt-itlc">Company C</span>
                                 </li>
                               </ul>
                            </div>
                            <div>
                               <ul className="inline-items">
                                 <li>
                                  <span>San Francisco</span>
                                  <span>, </span>
                                  <span>CA</span>
                                 </li>
                                 <li className="seperator-dot">
                                  <span>02/2014</span>
                                  <span> to </span>
                                  <span>02/2016</span>
                                 </li>
                               </ul>
                            </div>
                            <div className="margin-lft-35">
                               <ul>
                                  <li>Ran the register effectively and handled cash and credit purchases.</li>
                                  <li>Attended to customer needs, questions and complaints.</li>
                                  <li>Regularly checked the drawer to ensure that there were adequate cash and coin for transactions</li>
                               </ul>
                            </div>
                           </div>
                      </div>
                      <div className="edit-section">
                          <a href="#" className="color-edit" data-model="#work_model" onClick={this.openModel}><i className="icon wb-edit"></i></a>
                      </div>
               </div>
   		         <div className="model-backdrop display-none" id="work_model">
                      <div className="model-box model-width-700">
                           <header className="flex">
                               <h3 className="uppercase">professional information</h3>
                               <a href="#" data-model="#work_model" id="close_workmodel" onClick={this.closeModel}>
                                 <svg className="svg-icons-20 pointer" viewBox="0 0 612 612">
                                              <use href="/icons/sprites.svg#croos_icon" />
                                 </svg>
                               </a>
                           </header>
                           <main>
                              <div className="margin-top-5">
                                  <div className="font-16 margin-botm-5 color-90949c">Update your work exprerience</div>
                                  <form method="post" onSubmit={this.onFormSubmit}>
                                   <div className="list-exps" id="list_exps">
                                       {this.state.addNewCompany.length>0 &&
                                        this.state.addNewCompany.map((company_result)=>{
                                             return (
                                                 <div className="company-list-box border-botm-light">
                                                      <div className="flex space-bw margin-top-15">
                                                             <input type="text" className="model-input font-16 capitalize margin-ryt-25" name="edit_name" placeholder="Your designation" />
                                                             <input type="text" className="model-input font-16 capitalize" name="edit_email" placeholder="Your company" />
                                                        </div>
                                                        <div className="flex space-bw margin-top-15">
                                                             <input type="text" className="model-input font-16 capitalize margin-ryt-25" name="edit_pic" placeholder="City" />
                                                             <input type="text" className="model-input font-16 capitalize" name="edit_pic" placeholder="State" />
                                                        </div>
                                                        <div className="addskills-container">
                                                          {this.state.addExpBox.length>0 && 
                                                           this.state.addExpBox.map((result)=>{
                                                                return (
                                                                    <div className="flex space-bw align-center margin-top-15" key={result}>
                                                                         <input type="text" className="model-input font-16 capitalize" name={result} id={result} placeholder="Work details" />
                                                                         <span className="margin-lft-10"><a className="" onClick={(e)=>this.removeGeneratedTag(e, this.state.addExpBox, result, 'addExpBox')}><i className="icon wb-trash color-trash font-18"></i></a></span>
                                                                    </div>
                                                                )
                                                           })
                                                          }
                                                        </div>
                                                        <div className="margin-top-15">
                                                            <button type="button" className="uppercase btn btn-default font-16" onClick={this.addMoreWorkExp}><i className="icon wb-plus padding-ryt-10"></i> add more about your role</button>
                                                        </div>
                                                  </div>
                                             )
                                        })}
                                    </div>
                                  <div className="margin-top-15 txt-right">
                                       <button type="button" className="uppercase btn btn-default font-16" onClick={this.addMoreCompanies}><i className="icon wb-plus padding-ryt-10"></i>add more companies</button>
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

export default connect(state=>state, actions)(WorkExp);
