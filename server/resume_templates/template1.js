export default ()=>{
       return `<!doctype html>
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
            <div class="name-section uppercase">himanshu savita</div>
            <div class="txt-right margin-ryt-30">
                <div>8299852138</div>
                <div>Cras id dui. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, Bangalore, KA, 560017</div>
                <div>sunny@gmail.com</div>
            </div>
            <div class="edit-section"><a href="#" class="color-edit" data-model="#personal_model"><i class="icon wb-edit"></i></a></div>
        </div>
        <div class="model-backdrop display-none" id="personal_model">
            <div class="model-box">
                <header class="flex">
                    <h3 class="uppercase">personal information</h3><a href="#" data-model="#personal_model" id="close_signupmodel"><svg class="svg-icons-20 pointer" viewBox="0 0 612 612"><use href="/icons/sprites.svg#croos_icon"></use></svg></a></header>
                <main>
                    <div class="margin-top-5">
                        <div class="font-16 color-90949c">Update your basic information</div>
                        <form method="post" class="model-form">
                            <div class="margin-top-15"><input type="text" class="model-input font-16 capitalize" name="edit_name" placeholder="Your full name"></div>
                            <div class="margin-top-15"><input type="text" class="model-input font-16 capitalize" name="edit_email" placeholder="Your contact no"></div>
                            <div class="margin-top-15"><input type="text" class="model-input font-16 capitalize" name="edit_pic" placeholder="Your current address"></div>
                            <div class="margin-top-15"><input type="text" class="model-input font-16 capitalize" name="edit_pic" placeholder="Yout email"></div>
                            <div class="margin-top-15 txt-center"><button class="uppercase btn btn-default font-16">save</button></div>
                        </form>
                    </div>
                </main>
                <footer></footer>
            </div>
        </div>
        <div class="resume_section resume_summary">
            <div class="section_heading uppercase">professional summary</div>
            <div class="resume-content">
                <div>Highly organized and meticulous Administrative Assistant with experience in corporate office settings.Adept at preparing and maintaining files, greeting visitors and restocking supplies. Good communicator and planner with strong judgment
                    and critical thinking abilities.</div>
            </div>
            <div class="edit-section"><a href="#" class="color-edit" data-model="#summary_modal"><i class="icon wb-edit"></i></a></div>
        </div>
        <div class="model-backdrop display-none" id="summary_modal">
            <div class="model-box">
                <header class="flex">
                    <h3 class="uppercase">professional summary</h3><a href="#" data-model="#summary_modal" id="close_summary_modal"><svg class="svg-icons-20 pointer" viewBox="0 0 612 612"><use href="/icons/sprites.svg#croos_icon"></use></svg></a></header>
                <main>
                    <div class="margin-top-5">
                        <div class="font-16 color-90949c">Update your professional summary</div>
                        <form method="post" class="model-form">
                            <div class="margin-top-15"><input type="text" class="model-input font-16 capitalize" name="edit_name" placeholder="Your full name"></div>
                            <div class="margin-top-15 txt-center"><button class="uppercase btn btn-default font-16">save</button></div>
                        </form>
                    </div>
                </main>
                <footer></footer>
            </div>
        </div>
        <div class="resume_section resume_skills">
            <div class="section_heading uppercase">skills</div>
            <div class="resume-content">
                <table class="skills-list-table">
                    <tbody>
                        <tr class="vertical-top">
                            <td>
                                <ul>
                                    <li>Time management</li>
                                    <li>Time Letter preparation</li>
                                    <li>Correspondence handling</li>
                                    <li>Multi-line phone proficiency</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>Documents filing</li>
                                    <li>Multi-line phone proficiency</li>
                                    <li>Filing and data archiving</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="edit-section"><a href="#" class="color-edit" data-model="#skills_model"><i class="icon wb-edit"></i></a></div>
        </div>
        <div class="model-backdrop display-none" id="skills_model">
            <div class="model-box">
                <header class="flex">
                    <h3 class="uppercase">add skills</h3><a href="#" data-model="#skills_model" id="close_skillsmodel"><svg class="svg-icons-20 pointer" viewBox="0 0 612 612"><use href="/icons/sprites.svg#croos_icon"></use></svg></a></header>
                <main>
                    <div class="margin-top-5">
                        <div class="font-16 margin-botm-5 color-90949c">Update your skills</div>
                        <form method="post" class="model-form">
                            <div class="addskills-container"></div>
                            <div class="margin-top-15"><button class="uppercase btn btn-default font-16"><i class="icon wb-plus padding-ryt-10"></i> add more skills</button></div>
                            <div class="margin-top-15 txt-center"><button class="uppercase btn btn-default font-16">save</button></div>
                        </form>
                    </div>
                </main>
                <footer></footer>
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
            <div class="edit-section"><a href="#" class="color-edit" data-model="#work_model"><i class="icon wb-edit"></i></a></div>
        </div>
        <div class="model-backdrop display-none" id="work_model">
            <div class="model-box model-width-700">
                <header class="flex">
                    <h3 class="uppercase">professional information</h3><a href="#" data-model="#work_model" id="close_workmodel"><svg class="svg-icons-20 pointer" viewBox="0 0 612 612"><use href="/icons/sprites.svg#croos_icon"></use></svg></a></header>
                <main>
                    <div class="margin-top-5">
                        <div class="font-16 margin-botm-5 color-90949c">Update your work exprerience</div>
                        <form method="post">
                            <div class="list-exps" id="list_exps">
                                <div class="company-list-box border-botm-light">
                                    <div class="flex space-bw margin-top-15"><input type="text" class="model-input font-16 capitalize margin-ryt-25" name="edit_name" placeholder="Your designation"><input type="text" class="model-input font-16 capitalize" name="edit_email" placeholder="Your company"></div>
                                    <div
                                        class="flex space-bw margin-top-15"><input type="text" class="model-input font-16 capitalize margin-ryt-25" name="edit_pic" placeholder="City"><input type="text" class="model-input font-16 capitalize" name="edit_pic" placeholder="State"></div>
                                <div class="addskills-container">
                                    <div class="flex space-bw align-center margin-top-15"><input type="text" class="model-input font-16 capitalize" name="9bku6" id="9bku6" placeholder="Work details"><span class="margin-lft-10"><a class=""><i class="icon wb-trash color-trash font-18"></i></a></span></div>
                                </div>
                                <div class="margin-top-15"><button type="button" class="uppercase btn btn-default font-16" data-parent="8mvgud"><i class="icon wb-plus padding-ryt-10"></i> add more about your role</button></div>
                            </div>
                            <div class="company-list-box border-botm-light">
                                <div class="flex space-bw margin-top-15"><input type="text" class="model-input font-16 capitalize margin-ryt-25" name="edit_name" placeholder="Your designation"><input type="text" class="model-input font-16 capitalize" name="edit_email" placeholder="Your company"></div>
                                <div
                                    class="flex space-bw margin-top-15"><input type="text" class="model-input font-16 capitalize margin-ryt-25" name="edit_pic" placeholder="City"><input type="text" class="model-input font-16 capitalize" name="edit_pic" placeholder="State"></div>
                            <div class="addskills-container">
                                <div class="flex space-bw align-center margin-top-15"><input type="text" class="model-input font-16 capitalize" name="vduwt4" id="vduwt4" placeholder="Work details"><span class="margin-lft-10"><a class=""><i class="icon wb-trash color-trash font-18"></i></a></span></div>
                            </div>
                            <div class="margin-top-15"><button type="button" class="uppercase btn btn-default font-16" data-parent="c47o9"><i class="icon wb-plus padding-ryt-10"></i> add more about your role</button></div>
                    </div>
                    <div class="company-list-box border-botm-light">
                        <div class="flex space-bw margin-top-15"><input type="text" class="model-input font-16 capitalize margin-ryt-25" name="edit_name" placeholder="Your designation"><input type="text" class="model-input font-16 capitalize" name="edit_email" placeholder="Your company"></div>
                        <div
                            class="flex space-bw margin-top-15"><input type="text" class="model-input font-16 capitalize margin-ryt-25" name="edit_pic" placeholder="City"><input type="text" class="model-input font-16 capitalize" name="edit_pic" placeholder="State"></div>
                    <div class="addskills-container">
                        <div class="flex space-bw align-center margin-top-15"><input type="text" class="model-input font-16 capitalize" name="cmqite" id="cmqite" placeholder="Work details"><span class="margin-lft-10"><a class=""><i class="icon wb-trash color-trash font-18"></i></a></span></div>
                    </div>
                    <div class="margin-top-15"><button type="button" class="uppercase btn btn-default font-16" data-parent="tc97b"><i class="icon wb-plus padding-ryt-10"></i> add more about your role</button></div>
            </div>
            <div class="company-list-box border-botm-light">
                <div class="flex space-bw margin-top-15"><input type="text" class="model-input font-16 capitalize margin-ryt-25" name="edit_name" placeholder="Your designation"><input type="text" class="model-input font-16 capitalize" name="edit_email" placeholder="Your company"></div>
                <div class="flex space-bw margin-top-15"><input type="text" class="model-input font-16 capitalize margin-ryt-25" name="edit_pic" placeholder="City"><input type="text" class="model-input font-16 capitalize" name="edit_pic" placeholder="State"></div>
                <div class="addskills-container">
                    <div class="flex space-bw align-center margin-top-15"><input type="text" class="model-input font-16 capitalize" name="8qko3e" id="8qko3e" placeholder="Work details"><span class="margin-lft-10"><a class=""><i class="icon wb-trash color-trash font-18"></i></a></span></div>
                </div>
                <div class="margin-top-15"><button type="button" class="uppercase btn btn-default font-16" data-parent="04j5ul"><i class="icon wb-plus padding-ryt-10"></i> add more about your role</button></div>
            </div>
            <div class="company-list-box border-botm-light">
                <div class="flex space-bw margin-top-15"><input type="text" class="model-input font-16 capitalize margin-ryt-25" name="edit_name" placeholder="Your designation"><input type="text" class="model-input font-16 capitalize" name="edit_email" placeholder="Your company"></div>
                <div class="flex space-bw margin-top-15"><input type="text" class="model-input font-16 capitalize margin-ryt-25" name="edit_pic" placeholder="City"><input type="text" class="model-input font-16 capitalize" name="edit_pic" placeholder="State"></div>
                <div class="addskills-container">
                    <div class="flex space-bw align-center margin-top-15"><input type="text" class="model-input font-16 capitalize" name="atak5n" id="atak5n" placeholder="Work details"><span class="margin-lft-10"><a class=""><i class="icon wb-trash color-trash font-18"></i></a></span></div>
                </div>
                <div class="margin-top-15"><button type="button" class="uppercase btn btn-default font-16" data-parent="pggw74"><i class="icon wb-plus padding-ryt-10"></i> add more about your role</button></div>
            </div>
            <div class="company-list-box border-botm-light">
                <div class="flex space-bw margin-top-15"><input type="text" class="model-input font-16 capitalize margin-ryt-25" name="edit_name" placeholder="Your designation"><input type="text" class="model-input font-16 capitalize" name="edit_email" placeholder="Your company"></div>
                <div class="flex space-bw margin-top-15"><input type="text" class="model-input font-16 capitalize margin-ryt-25" name="edit_pic" placeholder="City"><input type="text" class="model-input font-16 capitalize" name="edit_pic" placeholder="State"></div>
                <div class="addskills-container">
                    <div class="flex space-bw align-center margin-top-15"><input type="text" class="model-input font-16 capitalize" name="4yxjkr" id="4yxjkr" placeholder="Work details"><span class="margin-lft-10"><a class=""><i class="icon wb-trash color-trash font-18"></i></a></span></div>
                </div>
                <div class="margin-top-15"><button type="button" class="uppercase btn btn-default font-16" data-parent="e10o4"><i class="icon wb-plus padding-ryt-10"></i> add more about your role</button></div>
            </div>
            <div class="company-list-box border-botm-light">
                <div class="flex space-bw margin-top-15"><input type="text" class="model-input font-16 capitalize margin-ryt-25" name="edit_name" placeholder="Your designation"><input type="text" class="model-input font-16 capitalize" name="edit_email" placeholder="Your company"></div>
                <div class="flex space-bw margin-top-15"><input type="text" class="model-input font-16 capitalize margin-ryt-25" name="edit_pic" placeholder="City"><input type="text" class="model-input font-16 capitalize" name="edit_pic" placeholder="State"></div>
                <div class="addskills-container">
                    <div class="flex space-bw align-center margin-top-15"><input type="text" class="model-input font-16 capitalize" name="j670sm" id="j670sm" placeholder="Work details"><span class="margin-lft-10"><a class=""><i class="icon wb-trash color-trash font-18"></i></a></span></div>
                </div>
                <div class="margin-top-15"><button type="button" class="uppercase btn btn-default font-16" data-parent="39dj5k"><i class="icon wb-plus padding-ryt-10"></i> add more about your role</button></div>
            </div>
            <div class="company-list-box border-botm-light">
                <div class="flex space-bw margin-top-15"><input type="text" class="model-input font-16 capitalize margin-ryt-25" name="edit_name" placeholder="Your designation"><input type="text" class="model-input font-16 capitalize" name="edit_email" placeholder="Your company"></div>
                <div class="flex space-bw margin-top-15"><input type="text" class="model-input font-16 capitalize margin-ryt-25" name="edit_pic" placeholder="City"><input type="text" class="model-input font-16 capitalize" name="edit_pic" placeholder="State"></div>
                <div class="addskills-container">
                    <div class="flex space-bw align-center margin-top-15"><input type="text" class="model-input font-16 capitalize" name="oq9umb" id="oq9umb" placeholder="Work details"><span class="margin-lft-10"><a class=""><i class="icon wb-trash color-trash font-18"></i></a></span></div>
                </div>
                <div class="margin-top-15"><button type="button" class="uppercase btn btn-default font-16" data-parent="tczs75"><i class="icon wb-plus padding-ryt-10"></i> add more about your role</button></div>
            </div>
            <div class="company-list-box border-botm-light">
                <div class="flex space-bw margin-top-15"><input type="text" class="model-input font-16 capitalize margin-ryt-25" name="edit_name" placeholder="Your designation"><input type="text" class="model-input font-16 capitalize" name="edit_email" placeholder="Your company"></div>
                <div class="flex space-bw margin-top-15"><input type="text" class="model-input font-16 capitalize margin-ryt-25" name="edit_pic" placeholder="City"><input type="text" class="model-input font-16 capitalize" name="edit_pic" placeholder="State"></div>
                <div class="addskills-container">
                    <div class="flex space-bw align-center margin-top-15"><input type="text" class="model-input font-16 capitalize" name="4f0kb" id="4f0kb" placeholder="Work details"><span class="margin-lft-10"><a class=""><i class="icon wb-trash color-trash font-18"></i></a></span></div>
                </div>
                <div class="margin-top-15"><button type="button" class="uppercase btn btn-default font-16" data-parent="a0rrxd"><i class="icon wb-plus padding-ryt-10"></i> add more about your role</button></div>
            </div>
        </div>
        <div class="margin-top-15 txt-right"><button type="button" class="uppercase btn btn-default font-16"><i class="icon wb-plus padding-ryt-10"></i>add more companies</button></div>
        <div class="margin-top-15 txt-center"><button class="uppercase btn btn-default font-16">save</button></div>
        </form>
    </div>
    </main>
    <footer></footer>
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
        <div class="edit-section"><a href="#" class="color-edit" data-model="#education_model"><i class="icon wb-edit"></i></a></div>
    </div>
    <div class="model-backdrop display-none" id="education_model">
        <div class="model-box model-width-700">
            <header class="flex">
                <h3 class="uppercase">educational details</h3><a href="#" data-model="#education_model" id="close_educationmodel"><svg class="svg-icons-20 pointer" viewBox="0 0 612 612"><use href="/icons/sprites.svg#croos_icon"></use></svg></a></header>
            <main>
                <div class="margin-top-5">
                    <div class="font-16 margin-botm-5 color-90949c">Update your educational details</div>
                    <form method="post">
                        <div class="list-exps" id="list-educations">
                            <div class="flex space-bw company-list-box margin-top-15 border-botm-light">
                                <div class="padding-top-10">1. </div>
                                <div class="width-90pr">
                                    <div class="flex space-bw margin-botm-15"><input type="text" class="model-input font-16 capitalize margin-ryt-25" name="edit_name" placeholder="Your Degree"><input type="text" class="model-input font-16 capitalize" name="edit_email" placeholder="Your College"></div>
                                    <div
                                        class="flex space-bw margin-botm-15"><input type="text" class="model-input font-16 capitalize margin-ryt-25" name="edit_pic" placeholder="State"><input type="text" class="model-input font-16 capitalize" name="edit_pic" placeholder="Year of passing"></div>
                                <div
                                    class="flex space-bw margin-botm-15"><input type="text" class="model-input font-16 capitalize" name="edit_pic" placeholder="University"></div>
                        </div>
                        <div class="padding-top-10"><span class="margin-lft-10"><a class=""><i class="icon wb-trash color-trash font-18"></i></a></span></div>
                </div>
        </div>
        <div class="margin-top-15 txt-right"><button type="button" class="uppercase btn btn-default font-16"><i class="icon wb-plus padding-ryt-10"></i>add more college details</button></div>
        <div class="margin-top-15 txt-center"><button class="uppercase btn btn-default font-16">save</button></div>
        </form>
    </div>
    </main>
    <footer></footer>
    </div>
    </div>
    </div>
</main>
          </div>
        </body>
      </html>`
};