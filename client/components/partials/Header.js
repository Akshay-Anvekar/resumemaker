import React, {Component, Fragment} from 'react'
import CONFIG from '../../../config'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';
import * as actions from '../actions'


class Header extends Component{
      render(){
      	return(
          <Fragment>
               <header className="main-header">
		      	  <div className="main-header-box">
		      	  	 <div className="flex-center main-logo font-bold logo"><a href="#">MEMES</a></div>
		      	  	 <div className="flex align-center main-header-account">
	                         <a href="#" className="uppercase margin-ryt-30" data-model="#login_model" onClick={this.openModel}>Login</a>
			      	  	 	 <div><button className="uppercase header-actions" data-model="#signup_model" onClick={this.openModel}>Signup</button></div>
		      	  	 </div>
		      	  </div>
		       </header>
          </Fragment>
        )
      }
}

export default connect(state=>state, actions)(Header);





