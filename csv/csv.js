const parse = require('csv-parse/lib/sync'); // csv 파서 모듈 //함수

console.log(parse);

const fs = require('fs'); //파일 시스템 모듈

console.log(fs);

const csv = fs.readFileSync('csv/data.csv'); // 현재 버퍼이다.

console.log(csv); // 버퍼


const records = parse(csv.toString('utf-8')); // 버퍼를 문자열로 바뀐다.

records.forEach((r,i) =>{
    console.log(i , r );
})

//csv 파일은 원래 텍스트인데 csv-parse 모듈과 fs 모듈을 이용해 파서를 진행
// fs 를 통해 버퍼를 읽고 -> string으로 바꾸고 모듈을 통해서
// 자바스크립트가 이해할 수 있는 json 형식으로 변환