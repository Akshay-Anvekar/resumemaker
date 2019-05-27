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
		      	  <div className="main-header-box capitalize">
		      	  	 <div className="nav-list">
		      	  	    <a href="#">personal</a>
		      	  	    <a href="#">summary</a>
		      	  	    <a href="#">skills</a>
		      	  	    <a href="#">work</a>
		      	  	    <a href="#">education</a>
		      	  	 </div>
		      	  	 <div className="nav-list">
		      	  	    <a href="#">link</a>
		      	  	    <a href="#">pdf</a>
		      	  	 </div>
		      	  </div>
		       </header>
          </Fragment>
        )
      }
}

export default connect(state=>state, actions)(Header);




