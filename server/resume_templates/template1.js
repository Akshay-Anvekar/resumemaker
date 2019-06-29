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
                                <div class="work-info-box">
                                    <div>
                                        <ul class="inline-items">
                                            <li><span class="txt-bold">Administrative Assistant</span></li>
                                            <li class="seperator-dot"><span class="uppercase txt-itlc">Company A</span></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul class="inline-items">
                                            <li><span>San Francisco</span><span>, </span><span>CA</span></li>
                                            <li class="seperator-dot"><span>02/2017</span><span> to </span><span>Current</span></li>
                                        </ul>
                                    </div>
                                    <div class="margin-lft-35">
                                        <ul>
                                            <li>Screened all visitors and directed them to the correct employee or office.</li>
                                            <li>Facilitated organized record retrieval and access.</li>
                                            <li>Organized all new hire, security and temporary paperwork.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="work-info-box">
                                    <div>
                                        <ul class="inline-items">
                                            <li><span class="txt-bold">Customer Service Representative</span></li>
                                            <li class="seperator-dot"><span class="uppercase txt-itlc">Company B</span></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul class="inline-items">
                                            <li><span>Berkeley</span><span>, </span><span>CA</span></li>
                                            <li class="seperator-dot"><span>02/2016</span><span> to </span><span>02/2017</span></li>
                                        </ul>
                                    </div>
                                    <div class="margin-lft-35">
                                        <ul>
                                            <li>Asked open-ended questions to assess customer needs.</li>
                                            <li>Scored in top 10% of employees in successful resolution of issues.</li>
                                            <li>Built long-term customer relationships and advised customers on purchases and promotions.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="work-info-box">
                                    <div>
                                        <ul class="inline-items">
                                            <li><span class="txt-bold">Cashier</span></li>
                                            <li class="seperator-dot"><span class="uppercase txt-itlc">Company C</span></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul class="inline-items">
                                            <li><span>San Francisco</span><span>, </span><span>CA</span></li>
                                            <li class="seperator-dot"><span>02/2014</span><span> to </span><span>02/2016</span></li>
                                        </ul>
                                    </div>
                                    <div class="margin-lft-35">
                                        <ul>
                                            <li>Ran the register effectively and handled cash and credit purchases.</li>
                                            <li>Attended to customer needs, questions and complaints.</li>
                                            <li>Regularly checked the drawer to ensure that there were adequate cash and coin for transactions</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="resume_section resume_education">
                            <div class="section_heading uppercase">education</div>
                            <div class="resume-content">
                                <div class="education-info-box">
                                    <div>
                                        <ul class="inline-items">
                                            <li><span class="txt-bold">Master of Arts</span></li>
                                            <li class="seperator-dot"><span class="capitalize txt-itlc">San Jose State University</span></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul class="inline-items">
                                            <li><span class="capitalize">San Jose State University</span><span>, </span><span>CA</span></li>
                                            <li class="seperator-dot"><span>2014</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="education-info-box">
                                    <div>
                                        <ul class="inline-items">
                                            <li><span class="txt-bold">Bachelor of Arts</span></li>
                                            <li class="seperator-dot"><span class="capitalize txt-itlc">San Jose State University</span></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul class="inline-items">
                                            <li><span class="capitalize">San Jose State University</span><span>, </span><span>CA</span></li>
                                            <li class="seperator-dot"><span>2014</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="education-info-box"></div>
                                <div class="education-info-box"></div>
                            </div>
                        </div>
                        </div>
                    </main>
          </div>
        </body>
      </html>`
	)
}