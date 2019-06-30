import puppeteer from 'puppeteer'
import Resume from '../models/resume'

import Template1 from '../resume_templates/template1'

export default (router)=>{

    const resumeCheckdataMiddleware = async (req, res, next)=>{
          const resume_id = (req.query['id'])? (req.query['id']).trim(): '1234567890';
          const savedResumeData = await Resume.findOne({resume_id});
          if(!savedResumeData){
          	 const defaultResumedata = await Resume.findOne({resume_id: '1234567890'});
          	 req.finalResumedata = defaultResumedata;
          }else
             req.finalResumedata = savedResumeData;
          next();
    }

    router.get('/download-resume', async (req, res)=>{
    	const browser = await puppeteer.launch({ headless: true });
		const page = await browser.newPage();
		await page.goto('https://public-props.s3.ap-south-1.amazonaws.com/css/index.html', {waitUntil: 'networkidle0'});
		const pdf = await page.pdf({ format: 'A4' });
		await browser.close();
		res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdf.length })
	    res.send(pdf)      
    });   
    router.get('/check-resume', async (req, res)=>{
    	const obj = {  
    		  "resume_id": "1234567890",
		      "email":{  
		         "primary":"johndoe@mail.com",
		         "secondry":"jessica@mail.com"
		      },
		      "phone":{  
		         "primary":"9999999999",
		         "secondry":"9999999999"
		      },
		      "address":{  
		         "primary":"Suspendisse feugiat. Nullam accumsan lorem in dui.",
		         "secondry":"Cras id dui. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, Bangalore, KA, 560017"
		      },
		      "name":"Himanshu savita",
		      "summary":"Highly organized and meticulous Administrative Assistant with experience in corporate office settings.Adept at preparing and maintaining files, greeting visitors and restocking supplies. Good communicator and planner with strong judgment and critical thinking abilities.",
		      "skills":[  
		         "Time management",
		         "Time Letter preparation",
		         "Correspondence handling",
		         "Multi-line phone proficiency",
		         "Documents filing",
		         "Multi-line phone proficiency",
		         "Filing and data archiving"
		      ],
		      "workexp":[  
		         {  
		            "designation":"Administrative Assistant",
		            "company":"company A",
		            "city":"San Francisco",
		            "state":"CA",
		            "start":"02/2017",
		            "end":"Current",
		            "details":[  
		               "Screened all visitors and directed them to the correct employee or office.",
		               "Facilitated organized record retrieval and access.",
		               "Organized all new hire, security and temporary paperwork."
		            ]
		         },
		         {  
		            "designation":"Customer Service Representative",
		            "company":"company B",
		            "city":"Berkeley",
		            "state":"CA",
		            "start":"02/2016",
		            "end":"02/2017",
		            "details":[  
		               "Asked open-ended questions to assess customer needs.",
		               "Scored in top 10% of employees in successful resolution of issues.",
		               "Built long-term customer relationships and advised customers on purchases and promotions."
		            ]
		         },
		         {  
		            "designation":"Cashier",
		            "company":"company C",
		            "city":"San Francisco",
		            "state":"CA",
		            "start":"02/2014",
		            "end":"02/2016",
		            "details":[  
		               "Ran the register effectively and handled cash and credit purchases.",
		               "Attended to customer needs, questions and complaints.",
		               "Regularly checked the drawer to ensure that there were adequate cash and coin for transactions"
		            ]
		         }
		        ],
		        "education":[  
		         {  
		            "degree":"Master of ArtsSan",
		            "college":"Jose State University",
		            "university":"San Jose State University",
		            "state":"CA",
		            "passedout":"2016"
		         },
		         {  
		            "degree":"Bachelor of ArtsSan",
		            "college":"Jose State University",
		            "university":"San Jose State University",
		            "state":"CA",
		            "passedout":"2014"
		         }
		      ],
        }
        const resume = new Resume(obj)
        const result = await resume.save();
        res.send({result});
    })

    router.get('/get-template', resumeCheckdataMiddleware, (req, res)=>{
    	 console.log(req.finalResumedata);
         res.send(Template1(req.finalResumedata));
    });

    router.post('/update-resume', async (req, res)=>{
    	const resumeObject = {};
        if(req.body.info_type==0){  //0 - PERSONAL INFO
        	  resumeObject['name'] = req.body.user_name? req.body.user_name : ''; 
        	  resumeObject['email'] = {};
              resumeObject['email']['primary'] = req.body.user_email? req.body.user_email : ''; 
              resumeObject['phone'] = {};
              resumeObject['phone']['primary'] = req.body.user_phone? req.body.user_phone : ''; 
              resumeObject['address'] = {};
              resumeObject['address']['primary'] = req.body.user_address? req.body.user_address : ''; 
        }
        if(req.body.info_type==1){  //1 - SUMMARY
        	  resumeObject['summary'] = req.body.user_summary? req.body.user_summary : '';
        }
        if(req.body.info_type==2){  //2 - SKILLS
        	  resumeObject['skills'] = req.body.user_skills? req.body.user_skills : '';
        }
        if(req.body.info_type==3){  //3 - EXPERIENCE
        	  resumeObject['workexp'] = req.body.user_exp? req.body.user_exp : [];
        }
        if(req.body.info_type==4){  //3 - EXPERIENCE
        	  resumeObject['education'] = req.body.user_education? req.body.user_education : [];
        }
        const resume_id  = req.body.resume_id;
        resumeObject['resume_id'] = req.body.resume_id;
        console.log(resume_id)
        try{
        	const result = await Resume.findOneAndUpdate(
        		{resume_id},
        		resumeObject,
        		{
        		  upsert: true,
        		  new: true
        		}
        	)
        	console.log(result)
	        // const resume = new Resume(resumeObject)
	        //const result = await resume.save();
	        res.status(200).send({
	        	 data: result
	        });
        }catch(e){
        	console.log(e);
	        res.status(400).send({
	        	 error: "database insertion error"
	        });
        }
    }); 

    router.get('/get-resume-data', resumeCheckdataMiddleware, (req, res)=>{
          return res.send({
         	 data : req.finalResumedata
          })
    })
    return router;
}














