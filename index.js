const puppeteer = require('puppeteer');
const dotenv = require('dotenv');
dotenv.config();

const crwal = async() =>{

    const browser = await puppeteer.launch( { 
        headless : false,
        args : ['--window-size=1366,768','--disable-notifications'],    

    });


    const page = await browser.newPage();

    await page.setViewport({
        width : 1366,
        height : 768,
    })


    await page.goto('http://facebook.com');

    // await page.evaluate( (k_id , k_pass) =>{

    //     const id = document.querySelector('._6lux input[type=text]'); // 찾은 핸들러에서
    //     const pass = document.querySelector('._6lux input[type=password]');
    //     id.value = k_id;                 //올릴 때 조심
    //     pass.value = k_pass;               //올릴 때 조심
        
    //     const btn = document.querySelector('#u_0_b');

    //     btn.click();
    // },k_id , k_pass)
    

    //puppeteer 가 제공하는 api 가 있다.

    await page.type('#email' , process.env.EMAIL);
    await page.type('#pass' , process.env.PASSWORD);

    await page.hover('#u_0_b');

    await page.waitForTimeout(3000);

    await page.click('#u_0_b');

    await page.waitForTimeout(10000);

    await page.keyboard.press('Escape');

    await page.waitForTimeout(3000);

    await page.click('#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div:nth-child(4) > div.ehxjyohh.kr520xx4.poy2od1o.b3onmgus.hv4rvrfc.n7fi1qx3 > div.du4w35lb.l9j0dhe7.byvelhso.rl25f0pe.j83agx80.bp9cbjyn > span');
    await page.waitForTimeout(3000);
    await page.click('#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div:nth-child(4) > div.ehxjyohh.kr520xx4.poy2od1o.b3onmgus.hv4rvrfc.n7fi1qx3 > div:nth-child(2) > div > div:nth-child(2) > div.j34wkznp.qp9yad78.pmk7jnqg.kr520xx4 > div.iqfcb0g7.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div > div > div > div > div > div > div > div > div.kr520xx4.pedkr2u6.ms05siws.pnx7fd3z.b7h9ocf4.pmk7jnqg.j9ispegn.k4urcfbm > div > div.a8nywdso.sj5x9vvc.rz4wbd8a.ecm0bbzt > div > div:nth-child(4) > div > div.ow4ym5g4.auili1gw.rq0escxv.j83agx80.buofh1pr.g5gj957u.i1fnvgqd.oygrvhab.cxmmr5t8.hcukyx3x.kvgmc6g5.nnctdnn4.hpfvmrgz.qt6c0cv9.jb3vyjys.l9j0dhe7.du4w35lb.bp9cbjyn.btwxx1t3.dflh9lhu.scb9dxdr');

    // await page.click('div[aria-label=계정]');

    // await page.waitForTimeout(3000);

    // await page.click('#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div:nth-child(4) > div.ehxjyohh.kr520xx4.poy2od1o.b3onmgus.hv4rvrfc.n7fi1qx3 > div:nth-child(2) > div > div:nth-child(1) > div.j34wkznp.qp9yad78.pmk7jnqg.kr520xx4 > div.iqfcb0g7.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div > div > div > div > div > div > div > div > div.kr520xx4.pedkr2u6.ms05siws.pnx7fd3z.b7h9ocf4.pmk7jnqg.j9ispegn.k4urcfbm > div > div.a8nywdso.sj5x9vvc.rz4wbd8a.ecm0bbzt > div > div:nth-child(4) > div > div.ow4ym5g4.auili1gw.rq0escxv.j83agx80.buofh1pr.g5gj957u.i1fnvgqd.oygrvhab.cxmmr5t8.hcukyx3x.kvgmc6g5.nnctdnn4.hpfvmrgz.qt6c0cv9.jb3vyjys.l9j0dhe7.du4w35lb.bp9cbjyn.btwxx1t3.dflh9lhu.scb9dxdr > div.ow4ym5g4.auili1gw.rq0escxv.j83agx80.buofh1pr.g5gj957u.i1fnvgqd.oygrvhab.cxmmr5t8.hcukyx3x.kvgmc6g5.tgvbjcpo.hpfvmrgz.qt6c0cv9.rz4wbd8a.a8nywdso.jb3vyjys.du4w35lb.bp9cbjyn.btwxx1t3.l9j0dhe7 > div > div > div > div > span');
    
    //await page.waitForSelector('body > div.l9j0dhe7.tkr6xdv7'); //팝업창을 기다린다.

    // await page.evaluate( async() =>{

    //     const v = document.querySelector('body > div.l9j0dhe7.tkr6xdv7');
    //     v.parentNode.removeChild(v);

    //     const log = document.querySelector('#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div:nth-child(4) > div.ehxjyohh.kr520xx4.poy2od1o.b3onmgus.hv4rvrfc.n7fi1qx3 > div.du4w35lb.l9j0dhe7.byvelhso.rl25f0pe.j83agx80.bp9cbjyn > span > div > div.oajrlxb2.tdjehn4e.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.j83agx80.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.l9j0dhe7.abiwlrkh.p8dawk7l.bp9cbjyn.s45kfl79.emlxlaya.bkmhp75w.spb7xbtv.rt8b4zig.n8ej3o3l.agehan2d.sk4xxmp2.taijpn5t.qypqp5cg.q676j6op');

    //     log.click();
    //     setInterval(() => 2000);
    //     log.click();
    //     setInterval(() => 2000);
    //     log.click();
    //     setInterval(() => 2000);
    //     log.click();
    //     setInterval(() => 2000);
    //     log.click();
    //     setInterval(() => 2000);
    //     log.click();
    //     setInterval(() => 2000);
    //     log.click();
    //     setInterval(() => 2000);

    //     const logout = document.querySelector('#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div:nth-child(4) > div.ehxjyohh.kr520xx4.poy2od1o.b3onmgus.hv4rvrfc.n7fi1qx3 > div:nth-child(2) > div > div:nth-child(1) > div.j34wkznp.qp9yad78.pmk7jnqg.kr520xx4 > div.iqfcb0g7.tojvnm2t.a6sixzi8.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.l9j0dhe7.iyyx5f41.a8s20v7p > div > div > div > div > div > div > div > div > div.kr520xx4.pedkr2u6.ms05siws.pnx7fd3z.b7h9ocf4.pmk7jnqg.j9ispegn.k4urcfbm > div > div.a8nywdso.sj5x9vvc.rz4wbd8a.ecm0bbzt > div > div:nth-child(4) > div > div.ow4ym5g4.auili1gw.rq0escxv.j83agx80.buofh1pr.g5gj957u.i1fnvgqd.oygrvhab.cxmmr5t8.hcukyx3x.kvgmc6g5.nnctdnn4.hpfvmrgz.qt6c0cv9.jb3vyjys.l9j0dhe7.du4w35lb.bp9cbjyn.btwxx1t3.dflh9lhu.scb9dxdr');

    //     logout.click();
    // })
    
    
    //alert , confirm , promot 창에서 무시 하기  순서는 이벤트리스너처럼 먼저 써줘야 한다.
    // page.on('dialog' , async()=>{
    //     console.log(dialog.type() , dialog.message());

    //     await dialog.dismiss();
    //     
    //     confirm 에서 긍정일 시 
    //     await dialog.accept();
    // })
 




}

crwal();