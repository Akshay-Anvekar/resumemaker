import puppeteer from 'puppeteer'
import Resume from '../models/resume'

export default (router)=>{
    router.get('/download-resume', async (req, res)=>{
    	const browser = await puppeteer.launch({ headless: true });
		const page = await browser.newPage();
		await page.goto('https://blog.risingstack.com', {waitUntil: 'networkidle0'});
		const pdf = await page.pdf({ format: 'A4' });
		await browser.close();
		res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdf.length })
	    res.send(pdf)      
    });   
    router.get('/check-resume', async (req, res)=>{
    	const obj = {
    		 personal: {
    		 	name : 'himanshu'
    		 }
    	}
        const resume = new Resume(obj)
        const result = await resume.save();
        res.send({result});
    })
    return router;
}