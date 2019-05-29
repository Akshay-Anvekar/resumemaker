export default (Component)=>{
	 return class Common extends Component{
	      attachWindowToModel = ()=>{
	         window.onclick = function(e){
	               if(e.target.classList.contains('model-backdrop'))
	                  e.target.classList.add('display-none');
	         }
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
	 }
}