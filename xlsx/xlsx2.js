const xlsx = require('xlsx'); //엑셀 모듈 설치하고 
const axios = require('axios');
const cheerio = require('cheerio');

const workbook = xlsx.readFile('xlsx/data.xlsx'); //데이터를 파싱

//시트가 여러개면
//workbook.sheetname 으로 검사할 수 있다.,

const ws = workbook.Sheets.영화목록;
  
 const records = xlsx.utils.sheet_to_json(ws); //패키지 문서를 보고 사요

//console.log(records);

const crawler = async () => { //async 함수 await 공부하자

    add_to_sheet(ws , 'C1' , 's' , '평점');


    // await Promise.all(records.map( async(r)=>{
    //     const response =  await axios.get(r.링크);

    //     if( response.status === 200){ //응답이 성공한 경우

    //         const html = response.data;
            
    //         const $ = cheerio.load(html);

    //         const text = $('.score.score_left .star_score').text();
    //         console.log(r.제목, '평점' , text.trim());
 
    //         add_to_sheet(ws , newCell , 'n' , text.trim());

    //     }
    // }
    // ))

        //   records.forEach( async (r , i) =>{
        //    // console.log(i, r.링크 );
        //     const response = await axios.get(r.링크);

        //     if(response.status === 200){
        //         const html = response.data;
        //         const $ = cheerio.load(html);
        //         const text = $('.score.score_left .star_score').text();
        //         console.log(r.제목, '평점' , text.trim());
        //     }
        // })



        for(const [i , r] of records.entries()){
           // console.log(i, r.링크 );

            const response = await axios.get(r.링크);

            if(response.status === 200){
                const html = response.data;
                const $ = cheerio.load(html);
                const text = $('.score.score_left .star_score').text();
                console.log(r.제목, '평점' , text.trim());

                const newCell = 'C' + (i + 2);
                add_to_sheet(ws , newCell , 'n' , parseFloat(text.trim()));
            }
        }
        xlsx.writeFile(workbook , 'xlsx/result.xlsx');


    // new Promise( async () => {
    //     const response = await axios.get(records[0].링크);

    //     if(response.status === 200){
    //         const html = response.data;
    //         console.log(html);
    //     }

    // })
    }

//console.log(records[0].링크);

crawler();
