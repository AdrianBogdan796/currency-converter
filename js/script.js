let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.68;
let rateUSD = 4.32;
let rateJPY = 0.033;

formElement.addEventListener("input", () => {

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {

        case "EUR":
            result = amount / rateEUR;
            break;

        case "USD":
            result = amount / rateUSD;
            break;

        case "JPY":
            result = amount / rateJPY;
            break;
    }

    resultElement.innerHTML = `${result.toFixed(2)} ${currency}
    </strong>`;
});