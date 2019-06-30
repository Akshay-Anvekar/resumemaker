import React, {Component, Fragment} from 'react'
import CONFIG from '../../../config'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';
import * as actions from '../actions'
import axios from 'axios';

class Header extends Component{
	  state = {
	  	 loading : 0, success :0
	  }
	  downloadResume = async (e)=>{
	  	 this.setState({loading: 1});
	  	 const {data} = await axios.get('/api/download-resume', {
										   responseType: 'arraybuffer',
										   headers: {
										     'Accept': 'application/pdf'
										}});
	  	 const blob = new Blob([data], {type: 'application/pdf'})
	  	 let a = document.createElement('a');
	  	 a.href = window.URL.createObjectURL(blob);
	  	 a.download = `your-file-name.pdf`
         a.click();
         this.setState({loading: 0})
	  }
      render(){
      	return(
          <Fragment>
               <header className="main-header">
		      	  <div className="main-header-box capitalize">
		      	  	 <div className="nav-list">
		      	  	    <a href="#">quickResume</a>
		      	  	 </div>
		      	  	 <div className="nav-list uppercase">
		      	  	    
		      	  	    {this.state.loading==0
		      	  	     ? <a href="#" onClick={this.downloadResume}>download<i className="icon padding-lft-8 wb-download"></i></a>
		      	  	     : <img className="svg-icons-loading-50 margin-ryt-15" src="/icons/loading.svg"/>
		      	  	    }
		      	  	 </div>
		      	  </div>
		       </header>
          </Fragment>
        )
      }
}

export default connect(state=>state, actions)(Header);




