/*dic = {
    fromCurrency:{
        toCurrency:[currencyRatio,locale,currencySymbol],
        toCurrency:[currencyRatio,locale,currencySymbol],
        toCurrency:[currencyRatio,locale,currencySymbol],
        .....
    },
    fromCurrency:
        .....
}*/
let dic = {
    "vnd": { "usd": [1 / 23206, "en", "USD"], "jpy": [1 / 216.703, "ja-JP", "JPY"], "krw": [1 / 18.9136, "krw", "KRW"], "idr": [1 / 1.55505, "idr", "idr"], "eur": [1 / 25111, "de-DE", "EUR"], "vnd": [1, "vi", "VND"] },
    "usd": { "vnd": [23206, "vi", "VND"], "jpy": [107.297, "ja-JP", "JPY"], "krw": [1223.80, "krw", "KRW"], "idr": [14904, "idr", "idr"], "eur": [1 / 1.08207, "de-DE", "EUR"], "usd": [1, "en", "USD"] },
    "jpy": { "vnd": [216.703, "vi", "VND"], "usd": [1 / 107.297, "en", "USD"], "krw": [11.4099, "krw", "KRW"], "idr": [138.937, "idr", "idr"], "eur": [1 / 116.054, "de-DE", "EUR"], "jpy": [1, "ja-JP", "JPY"] },
    "krw": { "vnd": [18.9136, "vi", "VND"], "usd": [1 / 1224.06, "en", "USD"], "jpy": [1 / 11.4096, "ja-JP", "JPY"], "idr": [12.1833, "idr", "idr"], "eur": [1 / 1323.75, "de-DE", "EUR"], "krw": [1, "krw", "KRW"] },
    "idr": { "vnd": [1.55505, "vi", "VND"], "usd": [1 / 14910, "en", "USD"], "jpy": [1 / 138.985, "ja-JP", "JPY"], "krw": [1 / 12.1818, "krw", "KRW"], "eur": [1 / 16134.84, "de-DE", "EUR"], "idr": [1, "idr", "idr"] },
    "eur": { "vnd": [25081, "vi", "VND"], "usd": [1.08207, "en", "USD"], "jpy": [116.054, "ja-JP", "JPY"], "idr": [16129, "idr", "idr"], "krw": [1323.75, "krw", "KRW"], "eur": [1, "de-DE", "EUR"] },
}
let isValid = false;
let from = null;
let to = null;
let amount = 0;
var fromCurrency = null;
var toCurrency = null;
$(document).ready(function() {
    fromCurrency = document.getElementById("fromCurrency");
    toCurrency = document.getElementById("toCurrency");
    let selectList = Object.keys(dic);
    selectList.forEach(element => {
        var option = document.createElement("option");
        option.text = element.toUpperCase();
        fromCurrency.add(option);
    })
    selectList.forEach(element => {
        var option = document.createElement("option");
        option.text = element.toUpperCase();
        toCurrency.add(option);
    })

});

function swap() {
    var x = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = x;
}

function submitAmount() {
    amount = document.getElementById("amount").value ? document.getElementById("amount").value : 0;
    from = fromCurrency.value.toLowerCase();
    to = toCurrency.value.toLowerCase();
    let formatedAmount = new Intl.NumberFormat(dic[from][from][1], { style: 'currency', currency: dic[from][from][2], maximumSignificantDigits: 3 }).format(amount)
    document.getElementById("result").innerText = formatedAmount + " = " + convert(from, to);
    document.getElementById("result").style.color = "deeppink";
    document.getElementById("result").style.fontWeight = 700;
}

// conversion
function convert(from, to) {
    let currencyRatio = dic[from][to][0];
    let locale = dic[from][to][1];
    let currency = dic[from][to][2];
    let res = (amount * currencyRatio);
    return new Intl.NumberFormat(locale, { style: 'currency', currency: currency, maximumSignificantDigits: 3 }).format(res);
}

function returnDictValue(input1, input2) {
    return dict[input1][input2]
}