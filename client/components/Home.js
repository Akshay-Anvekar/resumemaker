import React, {Component, Fragment} from 'react';
import _ from 'lodash'
import CONFIG from '../../config'
import {connect} from 'react-redux'
import * as actions from './actions'

import Personal from './ResumeComponents/Personal'
import Summary from './ResumeComponents/Summary'
import Skills from './ResumeComponents/Skills'
import WorkExp from './ResumeComponents/WorkExp'
import Education from './ResumeComponents/Education'

import CommonClass from './CommonClass'

class Home extends CommonClass(Component){
	  componentDidMount(){
	  	const randomStr = this.randomString();
	  	let resumeID = null;
	  	if(localStorage.getItem(CONFIG.LOCALSESSION_ID)){
           resumeID = localStorage.getItem(CONFIG.LOCALSESSION_ID);
	  	}else{
           localStorage.setItem(CONFIG.LOCALSESSION_ID, randomStr);
	  	}
	  	this.props.loadSampleResume(resumeID, ()=>{
	  		 console.log(this.props);
	  	});
	  }
      render(){
      	 return(
           <Fragment>
	           <main className="main-content-box">
	        	 <div className="main-content-wrapper">
                 <Personal/>
                 <Summary/>
                 <Skills/>
                 <WorkExp/>
                 <Education/>
		         </div>
	           </main>
           </Fragment>
      	 )
      }
}

export default connect(state=>state, actions)(Home);
