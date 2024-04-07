//import fetch
const utils = {
    rn: (int, fixed) => {
        if (int === null) return null;
        if (int === 0) return '0';
        fixed = (!fixed || fixed < 0) ? 0 : fixed;
        let b = (int).toPrecision(2).split('e'),
            k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
            c = k < 1 ? int.toFixed(0 + fixed) : (int / Math.pow(10, k * 3) ).toFixed(1 + fixed),
            d = c < 0 ? c : Math.abs(c),
            e = d + ['', 'K', 'M', 'B'][k];

            e = e.replace(/e/g, '');
            e = e.replace(/\+/g, '');

        return e;
    }
}

let tg = window.Telegram;

if(tg != undefined) {
    if (tg.WebApp != undefined && tg.WebApp.initData != undefined) { 
        let safe = tg.WebApp.initData;
        document.getElementById('H1xInfoCheck').innerText = "s:} " + safe;
        //tg.WebApp.backgroundColor = '#3d3d3d';
        //tg.WebApp.headerColor = '#212121';
        tg.WebApp.expand(); 
    }    
}
