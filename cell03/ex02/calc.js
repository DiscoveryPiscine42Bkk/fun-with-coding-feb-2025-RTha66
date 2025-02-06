document.getElementById('calculateBtn').addEventListener('click', function() {
    const leftOperand = parseFloat(document.getElementById('leftOperand').value);
    const rightOperand = parseFloat(document.getElementById('rightOperand').value);
    const operator = document.getElementById('operator').value;

    if (isNaN(leftOperand) || isNaN(rightOperand) || leftOperand < 0 || rightOperand < 0) {
        alert('Error: Please enter positive numbers only.');
        return;
    }

    let result;

    switch (operator) {
        case '+':
            result = leftOperand + rightOperand;
            break;
        case '-':
            result = leftOperand - rightOperand;
            break;
        case '*':
            result = leftOperand * rightOperand;
            break;
        case '/':
            if (rightOperand === 0) {
                alert("It's over 9000!");
                result = null;
            } else {
                result = leftOperand / rightOperand;
            }
            break;
        case '%':
            if (rightOperand === 0) {
                alert("It's over 9000!");
                result = null;
            } else {
                result = leftOperand % rightOperand;
            }
            break;
    }

    if (result !== null) {
        alert(`Result: ${result}`);
        console.log(`Result: ${result}`);
    }
});

// Every 30 seconds
setInterval(function() {
    alert('Please, use me...');
}, 30000);
