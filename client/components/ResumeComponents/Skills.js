import React, {Component, Fragment} from 'react';
import CommonClass from '../CommonClass'
import CONFIG from '../../../config'
import {connect} from 'react-redux'
import * as actions from '../actions'

class Skills extends CommonClass(Component){
      state = {
         addSkillsBox : [], loading : 0, success :0
      }
      componentDidMount(){
        this.addMoreSkills();
      }
      addMoreSkills = async (e)=>{
         if(e){
            e.preventDefault();
         }
         const addedId = this.state.addSkillsBox;
         addedId.push(this.randomString())
         await this.setState({
             addSkillsBox: addedId
         });
         document.getElementById('addskills_container').scrollTop = parseInt(document.getElementById('addskills_container').scrollHeight);
      }
      listSkills = (skillsListArray)=>{
          let result = `<td><ul>`;
          for(let x=0; x<skillsListArray.length; x++){
              if(x!=0 && x%5==0)
                 result += `</td></ul><td><ul><li>${skillsListArray[x]}</li>`;
                else
                   result += `<li>${skillsListArray[x]}</li>`;
          }
          result += `</td></ul>`;
          document.getElementById('skills_list').innerHTML = result;
      }
      onSubmitForm = (e)=>{
             e.preventDefault();
             const user_skills = this.state.addSkillsBox;
             const user_skills_values = user_skills.map((res)=>{
                 return e.target.elements[res].value;
             });
             // if(!this.validateInputs(e.target.elements, {user_name, user_email, user_phone})){
             //    return;
             // }
             console.log(user_skills_values);
             this.setState({loading: 1})
             this.props.updateResume({user_skills: user_skills_values}, 2, ()=>{
                  this.setState({success:1})
                  setTimeout(()=>{
                    this.closeAllModel();
                    this.setState({loading: 0, success: 0})
                  }, 1500)
             });
      }
      render(){
      	 return(
           <Fragment>
               <div className="resume_section resume_skills">
                      <div className="section_heading uppercase">
                          skills
                      </div>
                      <div className="resume-content">
                          <table className="skills-list-table">
                              <tbody>
                                 <tr className="vertical-top" id="skills_list">
                                   {this.props.resume_data && this.listSkills(this.props.resume_data.skills)}
                                 </tr>
                              </tbody>
                          </table>
                      </div>
                      <div className="edit-section">
                          <a href="#" className="color-edit" data-model="#skills_model" onClick={this.openModel}><i className="icon wb-edit"></i></a>
                      </div>
               </div>
   		         <div className="model-backdrop display-none" id="skills_model">
                      <div className="model-box">
                          {this.state.loading==1 &&                            
                             <div className="loading-cover">
                              {this.state.success==1
                                  ? <svg className="svg-success-80" viewBox="0 0 426.667 426.667">
                                                <use href="/icons/sprites.svg#success_completed" />
                                    </svg>
                                  : <img className="svg-icons-loading" src="/icons/loading.svg"/>
                              }
                             </div>
                           }
                           <header className="flex">
                               <h3 className="uppercase">add skills</h3>
                            <a href="#" data-model="#skills_model" className="close-model" id="close_skillsmodel" onClick={this.closeModel}>
                                <svg className="svg-icons-20 pointer" viewBox="0 0 612 612">
                                              <use href="/icons/sprites.svg#croos_icon" />
                                </svg>
                            </a>
                           </header>
                           <main>
                              <div className="margin-top-5">
                                  <div className="font-16 margin-botm-5 color-90949c">Update your skills</div>
                                  <form method="post" onSubmit={this.onSubmitForm}>
                                  <div className="addskills-container padding-ryt-lft-10 scroll-view" id="addskills_container">
                                  {this.state.addSkillsBox.length>0 && 
                                   this.state.addSkillsBox.map((result)=>{
                                        return (
                                            <div className="flex space-bw align-center margin-botm-15" key={result}>
                                                 <input type="text" className="model-input font-16 capitalize" name={result} id={result} placeholder="List your skill" />
                                                 <span className="margin-lft-10"><a href="#" className="" onClick={(e)=>this.removeGeneratedTag(e, this.state.addSkillsBox, result, 'addSkillsBox')}><i className="icon wb-trash color-trash font-18"></i></a></span>
                                            </div>
                                        )
                                   })
                                  }
                                  </div>
                                  <div className="margin-top-15 padding-ryt-lft-10">
                                      <button className="uppercase btn btn-default font-16" onClick={(e)=>this.addMoreSkills(e)}><i className="icon wb-plus padding-ryt-10"></i> add more skills</button>
                                  </div>
                                  <div className="margin-top-15 txt-center">
                                       <button type="submit" className="uppercase btn btn-default font-16">save</button>
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

export default connect(state=>state, actions)(Skills);
