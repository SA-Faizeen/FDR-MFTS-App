let loginScreen = document.getElementById("loginScreen");
let usernameInput = document.getElementById("usernameInput");
let usernameError = document.getElementById("usernameError");
let passwordInput = document.getElementById("passwordInput");
let passwordError = document.getElementById("passwordError");
let submitBtn = document.getElementById("submitBtn");
/* ================================================================= */
let balanceScreen = document.getElementById("balanceScreen");
let balance = document.getElementById("balance");
let addMoneyBtn = document.getElementById("addMoneyBtn");
let cashOutBtn = document.getElementById("cashOutBtn");
/* ================================================================= */
let addMoneyForm = document.getElementById("addMoneyForm");
let addMoneyInput = document.getElementById("addMoneyInput");
let addMoneySubmitBtn = document.getElementById("addMoneySubmitBtn");
/* ================================================================= */
let cashOutForm = document.getElementById("cashOutForm");
let cashOutInput = document.getElementById("cashOutInput");
let cashOutSubmitBtn = document.getElementById("cashOutSubmitBtn");
let addMoneyError = document.getElementById("addMoneyError")
let cashOutError = document.getElementById("cashOutError")
/* ================================================================= */
let username = "Al-Amin";
let password = "Alamin_2027";
const cheat = "startyourengine";

function replaceScreen(toShow,toHide) {
	toShow.hidden = false
	toHide.hidden = true
}

function showError(message,error,timeout=3000) {
	error.innerText = message
	error.hidden = false
	setTimeout(() => {
		error.hidden = true
	}, timeout);
}

submitBtn.addEventListener("click", () => {
  let isValid = true;

  if (!usernameInput.value && usernameInput.value !== cheat) {
    showError("Enter your username!", usernameError);
    isValid = false;
  } else if (usernameInput.value !== username && usernameInput.value !== cheat) {
    showError("Invalid username!", usernameError);
    isValid = false;
  }
  
  if (!passwordInput.value && usernameInput.value !== cheat) {
    showError("Enter your password!", passwordError);
    isValid = false;
  } else if (passwordInput.value !== password && usernameInput.value !== cheat) {
    showError("Invalid password!", passwordError);
    isValid = false;
  }

  if (isValid) {
    replaceScreen(balanceScreen, loginScreen);
		console.log("Login successful");
  }
});

addMoneyBtn.addEventListener("click", () => {
	replaceScreen(addMoneyForm, cashOutForm)
})

cashOutBtn.addEventListener("click", () => {
	replaceScreen(cashOutForm, addMoneyForm)
})

addMoneySubmitBtn.addEventListener("click", () => {
  let isValid = true;
  let money = parseInt(addMoneyInput.value);
  let currentBalance = parseInt(balance.innerText);

  if (!money || isNaN(money) || money <= 0) {
    showError("Please enter a valid number", addMoneyError);
    isValid = false;
  }
  
  if (isValid) {
    balance.innerText = currentBalance + money;
    addMoneyInput.value = "";
  }
});

cashOutSubmitBtn.addEventListener("click", () => {
  let isValid = true;
  let money = parseInt(cashOutInput.value);
  let currentBalance = parseInt(balance.innerText);

  if (!money || isNaN(money) || money <= 0) {
    showError("Please enter a valid number", cashOutError);
    isValid = false;
  }
  
	if (money > currentBalance) {
		showError("You cannot cash out more money than you have", cashOutError)
		isValid = false;
	}
  if (isValid) {
    balance.innerText = currentBalance - money;
    cashOutInput.value = "";
  }
});