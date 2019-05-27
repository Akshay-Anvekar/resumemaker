import React, {Component, Fragment} from 'react';
import _ from 'lodash'
import CONFIG from '../../config'
import {connect} from 'react-redux'
import * as actions from './actions'


class Home extends Component{
	  componentDidMount(){
	  }
      render(){
      	 return(
           <Fragment>
	           <main className="main-content-box">
	        	 <div className="main-content-wrapper">
		         <div className="flex resume_section section-border resume_personal">
                      <div className="uppercase">
                      	  himanshu savita
                      </div>
                      <div className="txt-right">
                      	  <div>8299852138</div>
                      	  <div>Cras id dui. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, Bangalore, KA, 560017</div>
                      	  <div>sunny@gmail.com</div>
                      </div>
		         </div>
		         <div className="flex resume_section resume_summary">
                      <div className="section_heading uppercase">
                      	   professional summary
                      </div>
                      <div className="txt-right">
                      	  <div>8299852138</div>
                      	  <div>Cras id dui. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, Bangalore, KA, 560017</div>
                      	  <div>sunny@gmail.com</div>
                      </div>
		         </div>
		         <div className="flex resume_section resume_skills">
                      <div className="section_heading uppercase">
                      	  skills
                      </div>
                      <div className="txt-right">
                      	  <div>8299852138</div>
                      	  <div>Cras id dui. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, Bangalore, KA, 560017</div>
                      	  <div>sunny@gmail.com</div>
                      </div>
		         </div>
		         <div className="flex resume_section resume_work">
                      <div className="section_heading uppercase">
                      	  work history
                      </div>
                      <div className="txt-right">
                      	  <div>8299852138</div>
                      	  <div>Cras id dui. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, Bangalore, KA, 560017</div>
                      	  <div>sunny@gmail.com</div>
                      </div>
		         </div>
		         <div className="flex resume_section resume_education">
                      <div className="section_heading uppercase">
                      	  education
                      </div>
                      <div className="txt-right">
                      	  <div>8299852138</div>
                      	  <div>Cras id dui. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, Bangalore, KA, 560017</div>
                      	  <div>sunny@gmail.com</div>
                      </div>
		         </div>
		         </div>
	           </main>
           </Fragment>
      	 )
      }
}

export default connect(state=>state, actions)(Home);
