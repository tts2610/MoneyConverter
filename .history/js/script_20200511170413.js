let dic = {
    "vnd": { "usd": [1 / 23206, "en", "USD"], "jpy": [1 / 216.703, "ja-JP", "JPY"] },
    "usd": { "vnd": [23206, "vi", "VND"], "jpy": [1 / 216703, "ja-JP", "JPY"] },
    "jpy": { "vnd": [216703, "vi", "VND"], "usd": [1 / 23206, "en", "USD"] }
}

let isValid = false;
let from = null;
let to = null;
let amount = 0;
while (!isValid) {
    if (Object.keys(dic).includes(from) && Object.keys(dic).includes(to) && !isNaN(amount)) isValid = true;
    else {
        from = prompt("Which currency do you want to convert from?\n\nYou can convert:\n &#9;vnd <-> usd\n\tvnd <-> jpy\n\tusd <-> vnd\n\tusd <-> jpy\n\tjpy<->usd\n\tjpy<->vnd").toLowerCase();
        to = prompt("Which currency do you want to convert to?").toLowerCase();
        amount = prompt("Enter your amount to convert:");
    }
}

function convert() {
    let currencyRatio = dic[from][to][0];
    let locale = dic[from][to][1];
    let currency = dic[from][to][2];
    res = (amount * currencyRatio);
    return new Intl.NumberFormat(locale, { style: 'currency', currency: currency, maximumSignificantDigits: 5 }).format(res);
}

alert("Here is your result: " + convert())