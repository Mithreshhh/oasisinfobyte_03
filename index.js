function validateInput() {
    const temperatureInput = document.getElementById('temperature');
    const convertButton = document.getElementById('convert-btn');
    
    // Enable or disable button based on input validity
    if (isNaN(temperatureInput.value) || temperatureInput.value === '') {
        temperatureInput.setCustomValidity('Please enter a valid number');
        convertButton.disabled = true;
    } else {
        temperatureInput.setCustomValidity('');
        convertButton.disabled = false;
    }
}

function convertTemperature() {
    const tempInput = parseFloat(document.getElementById('temperature').value);
    const selectedUnit = document.getElementById('unit').value;
    const resultElement = document.getElementById('result');
    
    let convertedTemp = 0;
    let convertedUnit = '';

    if (isNaN(tempInput)) {
        resultElement.innerHTML = 'Please enter a valid number!';
        return;
    }

    // Celsius to Fahrenheit & Kelvin
    if (selectedUnit === 'celsius') {
        convertedTemp = (tempInput * 9/5) + 32;
        convertedUnit = '°F';
        resultElement.innerHTML = `${convertedTemp.toFixed(2)} ${convertedUnit} (Fahrenheit)`;
    } 

    // Fahrenheit to Celsius & Kelvin
    else if (selectedUnit === 'fahrenheit') {
        convertedTemp = (tempInput - 32) * 5/9;
        convertedUnit = '°C';
        resultElement.innerHTML = `${convertedTemp.toFixed(2)} ${convertedUnit} (Celsius)`;
    } 

    // Kelvin to Celsius & Fahrenheit
    else if (selectedUnit === 'kelvin') {
        convertedTemp = tempInput - 273.15;
        convertedUnit = '°C';
        resultElement.innerHTML = `${convertedTemp.toFixed(2)} ${convertedUnit} (Celsius)`;
    }
}
