const xlsx = require('xlsx'); //엑셀 모듈 설치하고 

const workbook = xlsx.readFile('xlsx/data.xlsx'); //데이터를 파싱

// 객체의 형태로 엑셀의 여러정보를 workbook 에 저장



//console.log(workbook.Sheets.영화목록); //객체를 보고 데이터를 뽑는다.

const ws = workbook.Sheets.영화목록;

console.log(ws);

 const records = xlsx.utils.sheet_to_json(ws); //패키지 문서를 보고 사요

 console.log(records);
 //console.log(typeof(records[0]));
  
//  records.forEach((r, i) =>{              //두가지 포문 모두 기억
//      console.log(i , r.제목 , r.링크);
//  })

//  for ( const [i , r] of records.entries()){
//     console.log(i ,  r.제목 , r.링크);
//  }