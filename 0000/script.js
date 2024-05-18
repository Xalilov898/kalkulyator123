let result = document.getElementById('result');

function appendToResult(value) {
    result.value += value;
}

function clearResult() {
    result.value = '';
}

function backspace() {
    result.value = result.value.slice(0, -1);
}

function toggleSign() {
    if (result.value !== '' && result.value !== '0') {
        if (result.value[0] === '-') {
            result.value = result.value.slice(1);
        } else {
            result.value = '-' + result.value;
        }
    }
}

function appendPercentage() {
    if (result.value !== '') {
        result.value = String(parseFloat(result.value) / 100);
    }
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}
