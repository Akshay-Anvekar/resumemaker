import CONFIG from '../../config'
export default (Component)=>{
	 return class Common extends Component{
	      attachWindowToModel = ()=>{
	         window.onclick = function(e){
	               if(e.target.classList.contains('model-backdrop'))
	                  e.target.classList.add('display-none');
	         }
	      }
	      getResumeToken = ()=>{
	      	  return localStorage.getItem(CONFIG.LOCALSESSION_ID);
	      }
	      closeAllModel(){
	     	   let a = document.getElementsByClassName('close-model');
	           for(let x of a)
	               x.click(); 	  
	      }
	      closeModel = (e)=>{
	           document.querySelector(e.currentTarget.dataset.model).classList.add('display-none')
	      }
	      openModel = (e)=>{
	      	   this.attachWindowToModel();
	           this.clearInputs()
	           document.querySelector(e.currentTarget.dataset.model).classList.remove('display-none')
	           let user = e.currentTarget.dataset.user;
	      }
	      clearInputs(){
	           let a = document.getElementsByClassName('model-input');
	           for(let x of a)
	               x.value = '';
	      }
	      //randomString = ()=>Math.random().toString(36).substring(7);
	      randomString = ()=>Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
	      removeGeneratedTag = (e, arr, value, stateValue)=>{
	      	    e.preventDefault();
	      	    if(arr.length>1){
                   arr =  arr.filter((x)=>x!==value)
	      	    }
                this.setState({ [stateValue]: arr })
	      }
	      onKeyupCheckValidation(){
	      	 if(this.value!==''){
	      	 	this.classList.remove('input-empty')
	      	 }
	      }
	      validateInputs = (inputsArray, inputsObjectValues)=>{
	      	    let flag = true;
                for(let x in inputsArray){
                	 if(inputsObjectValues[inputsArray[x]['name']]!==undefined && inputsArray[x].value==''){
                        inputsArray[x].classList.add('input-empty');
                        inputsArray[x].onkeyup = this.onKeyupCheckValidation;
                        inputsArray[x].focus();
                        flag = false;
                        break; 
                	 }
                }
                return flag;
	      }
	 }
}