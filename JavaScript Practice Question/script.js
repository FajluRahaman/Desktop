const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const addbtn = document.getElementById('add');
const result = document.getElementById('result');

addbtn.addEventListener('click', function(){
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    // calculate the sum
    const sum = num1 + num2;

    // Display the result in the result span

    result.textContent = sum;
});


