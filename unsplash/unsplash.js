const puppeteer = require('puppeteer');
const xlsx = require('xlsx');
const axios = require('axios');
const fs = require('fs');
const add_to_sheet = require('./xlsx/add_to_sheet');

const csv = require('csv-parse/lib/sync');
const stringify = require('csv-stringify/lib/sync');



fs.readdir('unsplash' , (err) =>{
    if(err){
        fs.mkdirSync('unsplash');
    }
})




const crwal = async() =>{

    try{

        const browser =  await puppeteer.launch( { headless : false});
        const page = await browser.newPage();
        await page.goto('https://unsplash.com');

      //  await page.waitForTimeout(3000);

        let result = [];
        
        while(result.length <= 6){
        let ans = await page.evaluate( ()=>{

            let imgs =[];

            const imgEl = document.querySelectorAll('._2UGKr');//_2UGKr


            if(imgEl.length){
                imgEl.forEach( (v) => {
                    const imgg = v.querySelector('._1tO5- img._2UpQX');
                    if(imgg){
                        imgs.push(imgg.src);
                        v.parentElement.removeChild(v);
                    }

                });
            }
         //   page.waitForTimeout(2000);   
             window.scrollBy( 0 , 200);   
            return imgs;
        });
        result = result.concat(ans);
        await page.waitForSelector('._2UGKr');
    }

       // await page.waitForTimeout(2000);

       

       // console.log(result);

       //사진을 폴더에 저장
        // for( const [ i , r ] of result.entries()){
        //     //console.log(r);

        //     const gogo = await axios(r , {
        //         responseType : 'arraybuffer',
        //     })

        //     //console.log(gogo);

        //     fs.writeFileSync(`unsplash/${i}.jpg`, gogo.data);
        // }

        //
        
        //csv 에 쓰는법
        let ret = [];

        for( const [i , r] of result.entries()){

            ret.push([ i , r , i + 5]);
        }

        console.log(ret);

        const str = stringify(ret); // 이걸 쓸려면 최소 이차원 배열로 만들어 줘야 한다 오케?

        fs.writeFileSync('csv/unsplash.csv' , str);

        //엑셀에 저장해보자
        const workbook = xlsx.readFile('xlsx/unsplash.xlsx');

        const ws = workbook.Sheets.Sheet1;

        for( const [i , r] of ret.entries()){


            //console.log(r[0], r[1]);
             const newCell = 'C'+ (i +1);
             const newCell2 = 'B'+ (i +1);

            add_to_sheet(ws , newCell , 'n' , r[1]);
            add_to_sheet(ws , newCell2 , 's' , r[1]);
        }
        xlsx.writeFile(workbook , 'xlsx/unsplash1.xlsx');



        // console.log("완료");
         await page.close();
         await browser.close();

        
    }catch(e){
        console.log(e);
    }
}


crwal();