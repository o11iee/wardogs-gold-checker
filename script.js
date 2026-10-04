const goldPricePerGram = 100;

const amountInput = document.getElementById("gold-amount");
const calculateButton = document.querySelector("button");
const goldValue = document.getElementById("gold-value");

calculateButton.addEventListener("click", function () {
    const amount = Number(amountInput.value);

    if (amount <= 0) {
        goldValue.textContent = "Enter a valid amount";
        return;
    }

    const value = amount * goldPricePerGram;

    goldValue.textContent = `£${value.toFixed(2)}`;
});
