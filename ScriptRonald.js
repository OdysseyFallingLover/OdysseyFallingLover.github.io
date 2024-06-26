//import fetch

const utils = {
  rn: (int, fixed) => {
    if (int === null) return null;
    if (int === 0) return '0';
    fixed = (!fixed || fixed < 0) ? 0 : fixed;
    let b = (int).toPrecision(2).split('e'),
      k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
      c = k < 1 ? int.toFixed(0 + fixed) : (int / Math.pow(10, k * 3)).toFixed(1 + fixed),
      d = c < 0 ? c : Math.abs(c),
      e = d + ['', 'K', 'M', 'B'][k];

    e = e.replace(/e/g, '');
    e = e.replace(/\+/g, '');

    return e;
  }
}


fetch('https://api.dexscreener.com/latest/dex/tokens/0xfB08Dac00Da5E400915aF269245C722718293111')
  .then(response => response.json())
  .then(data => {
    document.getElementById('H1xPrice').innerText = "$" + data.pairs[0].priceUsd;
    document.getElementById('H1xLiqd').innerText = "$" + utils.rn(data.pairs[0].liquidity.usd);
    document.getElementById('H1xFDV').innerText = "$" + utils.rn(data.pairs[0].fdv);
    document.getElementById('H1xMcup').innerText = "$" + utils.rn(data.pairs[0].fdv);
});