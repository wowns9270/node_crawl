const parse = require('csv-parse/lib/sync');

const stringify = require('csv-stringify/lib/sync');

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

//    try{
//        const browser = await puppeteer.launch({headless : false})
   
//        try{
   
//        await Promise.all( records.map( async (r) => {

//            const page = await browser.newPage();
//            await page.goto(r[1]);
//            // 평점 태그를 찾아주어야 한다 직접
//            const scoreEl = await page.$('.score.score_left .star_score');

//            if(scoreEl){
//                const text = await page.evaluate(tag => tag.textContent , scoreEl);
//                console.log(r[0] , text.trim());
//            }
//            await page.close();

//        }));
//        await browser.close();
//        }catch(e){
//        console.log(e);
//        }

//    } catch(e){
//        console.log(e);
//    }  




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
    const result = [];
   const borwser =  await puppeteer.launch( {headless : false });
   const page = await borwser.newPage();

   //유저인척을하기 위해 설정 (크롤링하는것을 속이는 법)
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36');


   for( const [i , r] of records.entries()){

           await page.goto(r[1]);

           // const El = await page.$('.score.score_left .star_score');

            const text = await page.evaluate(( ) => {
                const score = document.querySelector('.score.score_left .star_score');


                if(score){
                    return score.textContent;
                }
            });

            if(text){
                result.push( [ r[0], r[1] , text.trim() ]);
            }
            await page.waitForTimeout(3000);
            await page.close();
   }
   borwser.close();

// 다시 쓰는법 

   const str = stringify(result);

   console.log(str);
   fs.writeFileSync('csv/result.csv' , str);
   }catch(e){
       console.log(e);
   }
};
crawler();


