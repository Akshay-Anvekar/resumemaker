const listSkills = (skillsListArray)=>{
	  let result = `<td><ul>`;
	  for(let x=0; x<skillsListArray.length; x++){
	  	  if(x!=0 && x%5==0)
	  	     result += `</td></ul><td><ul><li>${skillsListArray[x]}</li>`;
          else
          	 result += `<li>${skillsListArray[x]}</li>`;
	  }
	  result += `</td></ul>`;
      return result;
}

const listItems = (items)=>{
      let result = '';
	  for(let x of items){
          	 result += `<li>${x}</li>`;
	  }
      return result;
}

const listWorkExperiences = (expListArray)=>{
	  let result = ``;
	  for(let x=0; x<expListArray.length; x++){
	            result += `<div class="work-info-box">
					            <div>
					                <ul class="inline-items">
					                    <li><span class="txt-bold">${expListArray[x].designation}</span></li>
					                    <li class="seperator-dot"><span class="uppercase txt-itlc">${expListArray[x].company}</span></li>
					                </ul>
					            </div>
					            <div>
					                <ul class="inline-items">
					                    <li><span>${expListArray[x].city}</span><span>, </span><span>${expListArray[x].state}</span></li>
					                    <li class="seperator-dot"><span>${expListArray[x].start}</span><span> to </span><span>${expListArray[x].end}</span></li>
					                </ul>
					            </div>
					            ${expListArray[x].details.length>0 && 
						            `<div class="margin-lft-35">
						                <ul>
						                    ${listItems(expListArray[x].details)}
						                </ul>
						             </div>`}
	                       </div>`;
	  }
	  result += `</td></ul>`;
      return result;
}


const listEducationalDetails = (eduListArray)=>{
	  let result = ``;
	  for(let x=0; x<eduListArray.length; x++){
          result += `<div class="education-info-box">
                <div>
                    <ul class="inline-items">
                        <li><span class="txt-bold">${eduListArray[x].degree}</span></li>
                        <li class="seperator-dot"><span class="capitalize txt-itlc">${eduListArray[x].college}</span></li>
                    </ul>
                </div>
                <div>
                    <ul class="inline-items">
                        <li><span class="capitalize">${eduListArray[x].university}</span><span>, </span><span>${eduListArray[x].state}</span></li>
                        <li class="seperator-dot"><span>${eduListArray[x].passedout}</span></li>
                    </ul>
                </div>
           </div>`;
	  }
      return result;
}

export default (result)=>{
	return (
     `<!doctype html>
      <html lang="en">
        <head>
            <title>feelfunny</title>
            <meta charset="UTF-8">
            <meta http-equiv="Content-type" content="text/html; charset=UTF-8">
            <meta name="viewport"  content="width=device-width initial-scale=1"/>
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="/css/web-icons.css">
            <link rel="stylesheet" href="/css/style.css">
        </head>
        <body>
          <div id="root">
                <main class="main-content-box">
                    <div class="main-content-wrapper">
                        <div class="resume_section section-border resume_personal">
                            <div class="name-section uppercase">${result.name}</div>
                            <div class="txt-right">
                                <div>${result.phone.primary}</div>
                                <div>${result.address.primary}</div>
                                <div>${result.email.primary}</div>
                            </div>
                        </div>
                        <div class="resume_section resume_summary">
                            <div class="section_heading uppercase">professional summary</div>
                            <div class="resume-content">
                                <div>${result.summary}</div>
                            </div>
                        </div>
                        <div class="resume_section resume_skills">
                            <div class="section_heading uppercase">skills</div>
                            <div class="resume-content">
                                <table class="skills-list-table">
                                    <tbody>
                                        <tr class="vertical-top">
                                            ${listSkills(result.skills)}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="resume_section resume_work">
                            <div class="section_heading uppercase">work history</div>
                            <div class="resume-content">
                                ${listWorkExperiences(result.workexp)}
                            </div>
                        </div>
                        <div class="resume_section resume_education">
                            <div class="section_heading uppercase">education</div>
                            <div class="resume-content">
                               ${listEducationalDetails(result.education)}
                            </div>
                        </div>
                        </div>
                    </main>
          </div>
        </body>
      </html>`
	)
}