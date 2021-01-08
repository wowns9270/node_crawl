const puppeteer = require('puppeteer');
const axios = require('axios');
const fs = require('fs');


const crwal = async() =>{

    try{

        const browser =  await puppeteer.launch( { headless : false});
        const page = await browser.newPage();
        await page.goto('https://unsplash.com');

        



        

        await page.close();
        await browser.close();

    }catch(e){
        console.log(e);
    }
}


crwal();