//import fetch
fetch('https://api.dexscreener.com/latest/dex/tokens/0x764BFC309090E7f93EDcE53E5BeFa374CDCB7b8e')
.then(response => response.json())
.then(data => {
    document.getElementById('H2xPrice').innerText = "График цены Grimace/USDT: " + data.pairs[0].priceUsd;
});