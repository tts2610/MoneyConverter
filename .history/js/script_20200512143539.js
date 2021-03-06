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
        radioElement = '<div class=\"form-check\"><input class=\"form-check-input\" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"><label class="form-check-label" for="exampleRadios1" id="toCurrency">' + element.toUpperCase(); + '</label></div>';
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

    // reformating input
    let res = getValueFromDict(from, from);
    let formatedAmount = new Intl.NumberFormat(res[1], { style: 'currency', currency: res[2], maximumSignificantDigits: 3 }).format(amount)

    // set output
    document.getElementById("result").innerText = formatedAmount + " = " + convert(from, to);
}

// conversion
function convert(from, to) {
    let res = getValueFromDict(from, to);
    let outRes = (amount * res[0]);
    return new Intl.NumberFormat(res[1], { style: 'currency', currency: res[2], maximumSignificantDigits: 3 }).format(outRes);
}

function getValueFromDict(input1, input2) {
    let currencyRatio = dic[input1][input2][0];
    let locale = dic[input1][input2][1];
    let currency = dic[input1][input2][2];
    return [currencyRatio, locale, currency];
}


// SUPER ROCKET
function exchange() {
    // reset the result div
    document.getElementById("coinExchangeResult").innerHTML = "";

    let bills = [500000, 200000, 100000, 50000, 20000, 10000, 5000, 2000, 1000]
    let amount = parseInt(document.getElementById("coinExchange").value);
    while (amount) {
        bills.forEach(element => {
            let count = 0;
            while (amount >= element) {
                count++;
                amount = amount - element;
            }
            let wrapper = document.getElementById("coinExchangeResult");

            wrapper.innerHTML += '<div>' + count + " x " + element + "\n" + "</div>";
        });
    }
}