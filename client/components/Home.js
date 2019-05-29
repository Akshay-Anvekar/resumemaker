import React, {Component, Fragment} from 'react';
import _ from 'lodash'
import CONFIG from '../../config'
import {connect} from 'react-redux'
import * as actions from './actions'

import CommonClass from './CommonClass'

class Home extends CommonClass(Component){
	  componentDidMount(){
	  }
      render(){
      	 return(
           <Fragment>
                       
           		       <div className="model-backdrop display-none" id="user_model">
		                      <div className="model-box">
		                           <header className="flex">
		                               <h3>personal information</h3>
		                            <a href="#" data-model="#user_model" id="close_signupmodel" onClick={this.closeModel}>
		                                <svg className="svg-icons-20 pointer" viewBox="0 0 612 612">
		                                              <use href="/icons/sprites.svg#croos_icon" />
		                                </svg>
		                            </a>
		                           </header>
		                           <main>
		                              <div className="margin-top-20">
		                                  <div className="font-14 color-90949c">New section for post categorization</div>
		                                  <form method="post" onSubmit={this.submitSignup}>
		                                  <div className="margin-top-15">
		                                         <input type="text" className="model-input font-14" name="edit_name" placeholder="Section value" />
		                                     </div>
		                                  <div className="margin-top-15">
		                                         <input type="text" className="model-input font-14" name="edit_email" placeholder="Section describe" />
		                                     </div>
		                                     <div className="margin-top-15">
		                                         <input type="text" className="model-input font-14" name="edit_pic" placeholder="Section url" />
		                                     </div>
		                                     <div className="margin-top-15 txt-center">
		                                         <button className="uppercase btn btn-default">submit</button>
		                                     </div>
		                                  </form>
		                              </div>
		                           </main>
		                           <footer></footer>
		                      </div>
		                </div>



	           <main className="main-content-box">
	        	 <div className="main-content-wrapper">
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
                      	  <a href="#" className="color-edit"><i class="icon wb-edit"></i></a>
                      </div>
		         </div>
		         <div className="resume_section resume_summary">
                      <div className="section_heading uppercase">
                      	   professional summary
                      </div>
                      <div className="resume-content">
                      	  <div>Highly organized and meticulous Administrative Assistant with experience in corporate office settings.Adept at preparing and maintaining files, greeting visitors and restocking supplies. Good communicator and planner with strong judgment and critical thinking abilities.</div>
                      </div>
                      <div className="edit-section">
                      	  <a href="#" className="color-edit" data-model="#user_model" onClick={this.openModel}><i class="icon wb-edit"></i></a>
                      </div>
		         </div>
		         <div className="resume_section resume_skills">
                      <div className="section_heading uppercase">
                      	  skills
                      </div>
                      <div className="resume-content">
                      	  <table className="skills-list-table">
                      	      <tbody>
                      	         <tr className="vertical-top">
                      	         	<td>
                      	         		<ul>
			                      	         <li>Time management</li>
			                      	      	 <li>Time Letter preparation</li>
			                      	      	 <li>Correspondence handling</li>
			                      	      	 <li>Multi-line phone proficiency</li>  			
                      	         		</ul>
                      	         	</td>
                      	         	<td>
                                       <ul>
                                         <li>Documents filing</li>
	                      	      	     <li>Multi-line phone proficiency</li>
	                      	      	     <li>Filing and data archiving</li>
                                       </ul>
                      	         	</td>
                      	         </tr>
                      	      </tbody>
                      	  </table>
                      </div>
                      <div className="edit-section">
                      	  <a href="#" className="color-edit"><i class="icon wb-edit"></i></a>
                      </div>
		         </div>
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
                      	  <a href="#" className="color-edit"><i class="icon wb-edit"></i></a>
                      </div>
		         </div>
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
                      	  <a href="#" className="color-edit"><i class="icon wb-edit"></i></a>
                      </div>
		         </div>
		         </div>
	           </main>
           </Fragment>
      	 )
      }
}

export default connect(state=>state, actions)(Home);
