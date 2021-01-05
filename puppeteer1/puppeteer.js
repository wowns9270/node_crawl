const parse = require('csv-parse/lib/sync');
const fs = require('fs');
const puppeteer = require('puppeteer');


const csv = fs.readFileSync('csv/data.csv');

const records = parse(csv.toString('utf-8')); 
//puppeteer 크롬 기반

//console.log(records);



const crawler = async () => {

   //브라우저 띠우고 페이지 기다리고 하는 작업은 모두
   //비동기 작업 await은 프로미스 프로미스가 resolve 되는것을
   //기다린다.


   //haedless는 true , default 는 화면 안보임 -> 배포시
           //   false 는 개발시 화면 보임

   //await 순차적으로 실행

  // const browser = await puppeteer.launch({headless : false})
   
   // for( const [i, r] of records.entries()){

   //     const page = await browser.newPage();

   //     await page.goto(r[1]);

   //     await page.waitForTimeout(3000);

    //     await page.close();
   // }

   
   // records.forEach( async (r , i) => {

   //     const page = await browser.newPage();

   //     await page.goto(r[1]);

   //     await page.waitForTimeout(3000);

   //     await page.close();

   // })

   // try{
   //     const browser = await puppeteer.launch({headless : false})
   
   //     try{
   
   //     await Promise.all( records.map( async (r) => {

   //         const page = await browser.newPage();
   //         await page.goto(r[1]);
   //         // 평점 태그를 찾아주어야 한다 직접
   //         const scoreEl = await page.$('.score.score_left .star_score');

   //         if(scoreEl){
   //             const text = await page.evaluate(tag => tag.textContent , scoreEl);
   //             console.log(r[0] , text.trim());
   //         }
   //         await page.close();

   //     }));
   //     await browser.close();
   //     }catch(e){
   //     console.log(e);
   //     }

   // } catch(e){
   //     console.log(e);
   // }  




   // const [page,page2 ,page3] = await Promise.all([
   //     await browser.newPage(),
   //     await browser.newPage(),
   //     await browser.newPage(),
   // ]);



   // await Promise.all([

   //     page.goto('https://google.com'),
   //     page2.goto('https://naver.com'),
   //     page3.goto('https://inflearn.com')

   // ]);

   // await Promise.all([

   //     page.waitForTimeout(3000),
   //     page2.waitForTimeout(2000),
   //     page3.waitForTimeout(1000)

   // ]);

   
   // await page.close();
   // await page2.close();
   // await page3.close();

  // await browser.close();

   //=========================================================

   try{

   const borwser =  await puppeteer.launch( {headless : false });

   await Promise.all( records.map( async (r , i) =>{

       try{

           const page = await borwser.newPage();

           await page.goto(r[1]);

           const El = await page.$('.score.score_left .star_score');

           if(El){

               const text = await page.evaluate( tag => tag.textContent , El);
               console.log(r[0] , text.trim());

           }

           await page.close();
       }catch(e){
           console.log(e);
       }
   }))

   borwser.close();
   }catch(e){
       console.log(e);
   }
};


crawler();


