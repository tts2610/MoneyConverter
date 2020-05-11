// dictionary structure: {fromCurrency:{toCurrency:[currencyRatio,locale,currencySymbol]}}
let dic = {
    "vnd": { "usd": [1 / 23206, "en", "USD"], "jpy": [1 / 216.703, "ja-JP", "JPY"], "krw": [1 / 18.9136, "krw", "KRW"], "idr": [1 / 1.55505, "idr", "idr"] },
    "usd": { "vnd": [23206, "vi", "VND"], "jpy": [1 / 216.703, "ja-JP", "JPY"], "krw": [1223.80, "krw", "KRW"], "idr": [14904, "idr", "idr"] },
    "jpy": { "vnd": [216.703, "vi", "VND"], "usd": [1 / 23206, "en", "USD"], "krw": [11.4099, "krw", "KRW"], "idr": [138.937, "idr", "idr"] },
    "krw": { "vnd": [18.9136, "vi", "VND"], "usd": [1 / 1224.06, "en", "USD"], "jpy": [1 / 11.4096, "ja-JP", "JPY"], "idr": [1 / 1.55505, "idr", "idr"] },
    "idr": { "vnd": [1.55505, "vi", "VND"], "usd": [1 / 1224.06, "en", "USD"], "jpy": [1 / 11.4096, "ja-JP", "JPY"], "idr": [1 / 1.55505, "idr", "idr"] },
}
let isValid = false;
let from = null;
let to = null;
let amount = 0;

// loop to check validity
while (!isValid) {
    if (Object.keys(dic).includes(from) && Object.keys(dic).includes(to) && !isNaN(amount)) isValid = true;
    else {
        from = prompt("Which currency do you want to convert from?").toLowerCase();
        to = prompt("Which currency do you want to convert to?").toLowerCase();
        amount = prompt("Enter your amount to convert:");
    }
}

// conversion
function convert() {
    let currencyRatio = dic[from][to][0];
    let locale = dic[from][to][1];
    let currency = dic[from][to][2];
    res = (amount * currencyRatio);
    return new Intl.NumberFormat(locale, { style: 'currency', currency: currency, maximumSignificantDigits: 3 }).format(res);
}

// result
alert("Here is your result: " + convert())