const billAmt = document.querySelector("#billAmt");
const nextBtn = document.querySelector("#nextBtn");
const cashGiven = document.querySelector("#cashGiven");
const checkBtn = document.querySelector("#checkBtn");
const errorDiv = document.querySelector(".errorMsg");
const cashGivenDiv = document.querySelector(".cashGivenInput");
const changeReturnDiv = document.querySelector(".changeReturn");
const noOfNotes = document.querySelectorAll(".noOfNotes");
const arrayNoteAmt = [2000, 500, 100, 50, 20, 10, 5, 2, 1];
nextBtn.addEventListener("click", () => {
    hideError();
    if (billAmt.value > 0) {
        nextBtn.style.display = "none";
        cashGivenDiv.style.display = "block";
    } else {
        showError("Enter valid bill amount");
    }
})
checkBtn.addEventListener("click", () => {
    hideError();
    if (billAmt.value > 0 && cashGiven.value > 0) {
        // if (!(Number.isInteger(cashGiven.value))) {
        //     showError("Enter a valid amount in cash given field");
        //     return;
        // }
        if (cashGiven.value < billAmt.value) {
            showError("Cash is less than bill, please enter right amount");
            return;
        }
        calculateNotes(billAmt.value, cashGiven.value);
    } else {
        showError("Enter valid bill amount and cash given to continue");
    }
})

function hideError() {
    errorDiv.style.display = "none";
}

function showError(text) {
    errorDiv.style.display = "block";
    errorDiv.innerText = text;
    changeReturnDiv.style.display = "none";
}

function calculateNotes(bill, cash) {
    let returningAmt = cash - bill;
    if (returningAmt < 1) {
        showError("No need to return any amount");
        return;
    }
    changeReturnDiv.style.display = "block";
    for (let i = 0; i < arrayNoteAmt.length; i++) {
        let notesDenomination = Math.trunc(returningAmt / arrayNoteAmt[i]);
        returningAmt = returningAmt % arrayNoteAmt[i];
        noOfNotes[i].innerText = notesDenomination;
    }

}