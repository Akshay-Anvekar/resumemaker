import puppeteer from 'puppeteer'
import Resume from '../models/resume'

import Template1 from '../resume_templates/template1'

export default (router)=>{
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
    		 personal: {
    		 	name : 'himanshu1'
    		 }
    	}
        const resume = new Resume(obj)
        const result = await resume.save();
        res.send({result});
    })
    router.get('/get-template', (req, res)=>{
         res.send(Template1())
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
        try{
	        const resume = new Resume(resumeObject)
	        const result = await resume.save();
	        res.status(200).send({
	        	 data: result
	        })
        }catch(e){
	        res.status(400).send({
	        	 error: "database insertion error"
	        })
        }
    });

    return router;
}