{

const calculateResult = (amount, currency) => {
    const rateEUR = 4.68;
    const rateUSD = 4.32;
    const rateJPY = 0.033;

    switch (currency) {

        case "EUR":
            return amount / rateEUR;

        case "USD":
            return amount / rateUSD;

        case "JPY":
            return amount / rateJPY;
    }
};

const onFormInput = () => {

    const currencyElement = document.querySelector(".js-currency");
    const amountElement = document.querySelector(".js-amount");
    const resultElement = document.querySelector(".js-result");

    const currency = currencyElement.value;

    const result = calculateResult(+amountElement.value, currency);

    resultElement.innerHTML = `${result.toFixed(2)} ${currency}
    </strong>`;
};

const init = () => {
const formElement = document.querySelector(".js-form");

formElement.addEventListener("input", onFormInput);
};

init();

}