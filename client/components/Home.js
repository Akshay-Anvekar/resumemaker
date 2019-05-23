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
        	 <div className="flex main-content-wrapper">
	        	 <div className="main-content">
		        	 	 <div className="featured-tags">
		        	 	  	   <div className="flex-wrap">
		        	 	  	   	  <a className="tags-box featured-tags-box margin-botm-10 margin-ryt-10" href="#">Avengers</a>
		        	 	  	   	  <a className="tags-box featured-tags-box margin-botm-10 margin-ryt-10" href="#">Game of Thrones</a>
		        	 	  	   	  <a className="tags-box featured-tags-box margin-botm-10 margin-ryt-10" href="#">Donald Trump</a>
							      <a className="tags-box featured-tags-box margin-botm-10 margin-ryt-10" href="#">
							        Endgame
							      </a>
							      <a className="tags-box featured-tags-box margin-botm-10 margin-ryt-10" href="#">
							        Trashtag
							      </a>
							      <a className="tags-box featured-tags-box margin-botm-10 margin-ryt-10" href="#">
							        David Beckham
							      </a>
							      <a className="tags-box featured-tags-box margin-botm-10 margin-ryt-10" href="#">
							        Kpop
							      </a>
							      <a className="tags-box featured-tags-box margin-botm-10 margin-ryt-10" href="#">
							        Captain Marvel
							      </a>
							      <a className="tags-box featured-tags-box margin-botm-10 margin-ryt-10" href="#">
							        Pokemon
							      </a>
		        	 	  	   </div>
		        	 	 </div>
				 </div>
	        </div>
           </main>
           </Fragment>
      	 )
      }
}

export default connect(state=>state, actions)(Home);
