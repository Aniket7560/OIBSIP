document.addEventListener("DOMContentLoaded", function () {
    const inputTemperature = document.getElementById("input-temperature");
    const fromUnit = document.getElementById("from-unit");
    const toUnit = document.getElementById("to-unit");
    const convertButton = document.getElementById("convert-button");
    const result = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        const inputValue = parseFloat(inputTemperature.value);
        const from = fromUnit.value;
        const to = toUnit.value;

        if (isNaN(inputValue)) {
            result.textContent = "Please enter a valid number.";
            return;
        }

        let convertedValue;

        if (from === "Celsius" && to === "Fahrenheit") {
            convertedValue = (inputValue * 9/5) + 32;
        } else if (from === "Fahrenheit" && to === "Celsius") {
            convertedValue = (inputValue - 32) * 5/9;
        } else {
            convertedValue = inputValue;
        }

        result.textContent =`Result: ${inputValue} ${from} is ${convertedValue.toFixed(2)} ${to}`;
    });
});
