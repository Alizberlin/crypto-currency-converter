let crypto_currency = document.querySelector('#inputGroupSelect01');
let currency = document.querySelector('#inputGroupSelect03');
let button = document.querySelector('.submit');
let output = document.querySelector('#output');

let Cryp = ['btc', 'exp', 'eos', 'ltc', 'eth'];
let Curr = ['eur', 'usd', 'gbp', 'aud', 'hkn'];

// button.addEventListener('click', ()=>{
//     let amount = Number(document.querySelector('.amount').value);
//         fetch('https://api.cryptonator.com/api/ticker/' + Cryp[crypto_currency.selectedIndex] + '-' + Curr[currency.selectedIndex])
//         .then(response => response.json())
//         .then(data => {
//             output.value = (Number(data.ticker.price) * amount).toFixed(2);
//         });
    
// });




// Async Await

async function convert(){
    let amount = Number(document.querySelector('.amount').value);
    let response = await fetch('https://api.cryptonator.com/api/ticker/' + Cryp[crypto_currency.value] + '-' + Curr[currency.value]);
    let Jdata = await response.json();
     output.value = (Number(Jdata.ticker.price) * amount).toFixed(2);
     console.log(crypto_currency.value);
     console.log(currency.value);

}

button.addEventListener('click', convert);





//keypress Eventlistners
crypto_currency.addEventListener('keydown', function (e) {
    if (e.keyCode === 9 || 13) {
      convert()
    }
});
button.addEventListener('keydown', function (e) {
    if (e.keyCode === 9 || 13) {
      convert()
    }
});
currency.addEventListener('keydown', function (e) {
    if (e.keyCode === 9 || 13) {
      convert()
    }
});