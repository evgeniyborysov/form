const firstInput = document.getElementById("first");
const secondInput = document.getElementById("second");
const submitButton = document.querySelector(".btn-submit");
const sighn = document.getElementById("sign");
const res = document.querySelector(".answer");

function formCalc() {
    let firstInputValue = firstInput.value;
    let secondInputValue = secondInput.value;
    const sighnValue = sighn.value;
    let result;
    if (firstInputValue == "" || secondInputValue == "") {
        alert("krkr");
    } else {
        firstInputValue = +firstInput.value;
        secondInputValue = +secondInput.value;
        console.log(firstInputValue);
        console.log(secondInputValue);
        // console.log(sighnValue);
        switch (sighnValue) {
            case "+":
                result = firstInputValue + secondInputValue;
                break;
            case "-":
                result = firstInputValue - secondInputValue;
                break;
            case "*":
                result = firstInputValue * secondInputValue;
                break;
            case "/":
                result = firstInputValue / secondInputValue;
                break;
            default:
                break;
        }
        res.textContent = `${firstInputValue} ${sighnValue} ${secondInputValue} = ${result}`;
    }
}

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    formCalc();
});
