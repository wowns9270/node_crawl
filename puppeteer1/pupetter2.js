const puppeteer = require('puppeteer');
const axios = require('axios');

const fs = require('fs');

fs.readdir( 'poster' , (err) =>{

    //폴더가 없다?
    if(err){
        console.log('폴더없음');

        fs.mkdirSync('poster');
    }
})

fs.readdir( 'screenshot' , (err) =>{

    //폴더가 없다?
    if(err){
        console.log('폴더없음');

        fs.mkdirSync('screenshot');
    }
})

const crwal = async () =>{

    const browser = await puppeteer.launch( {
        headless : false,
        args : ['--window-size=1366,768'],
    });
    const page = await browser.newPage();

    await page.setViewport({
        width: 1366,
        height : 768,
    })


    await page.goto('https://movie.naver.com/movie/bi/mi/basic.nhn?code=18847');

    const url = await page.evaluate( ()=>{

        const El = document.querySelector('.poster img');
        if(El){
            return El.src;
        }
    })

    if(url){

        const screenEx = await page.screenshot({ 
            path : 'screenshot/타이타닉.png' , 
            fullPage : true,
            // clip : {
            //     x : 100,
            //     y : 100,
            //     width : 300,
            //     height : 300,
            // }
        }); // 버퍼


        const imgResult = await axios.get( url.replace(/\?.*$/,'') , {
            //응답 형식?
            responseType : 'arraybuffer',
        })

        fs.writeFileSync(`poster/타이타닉.jpg` , imgResult.data);
    }

    await page.waitForTimeout(3000);
    await page.close();
    await browser.close();
}

crwal();
