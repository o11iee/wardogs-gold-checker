// Current WARDOGS gold price
const goldPricePerBar = 166000;

const amountInput = document.getElementById("gold-amount");
const calculateButton = document.querySelector("button");
const goldValue = document.getElementById("gold-value");
const goldPrice = document.getElementById("gold-price");

// Display current price
goldPrice.textContent = `$${goldPricePerBar.toLocaleString()} per bar`;

// Calculate gold value
calculateButton.addEventListener("click", function () {
    const amount = Number(amountInput.value);

    if (amount <= 0) {
        goldValue.textContent = "Enter a valid amount";
        return;
    }

    const value = amount * goldPricePerBar;

    goldValue.textContent = `$${value.toLocaleString()}`;
});
