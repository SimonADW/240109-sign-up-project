
const submitButton = document.querySelector("button");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");

const passwordMatchErrorMessage = document.querySelector(".password-error-message");
const welcomeMessage = document.querySelector(".welcome-message");

const passwordsMatch = ()=> {
	return (password1.value === password2.value)
}

function CreateUserObject() {
	this.firstName = firstName.value,
	this.lastName = lastName.value,
	this.email = email.value, 
	this.phone = phone.value, 
	this.password1 = password1.value,
	this.welcomeUser = ()=> {
		welcomeMessage.textContent = `Welcome onboard ${this.firstName}`;
	};
};

const createAccount = (currentUserName)=> {	
	let userName = currentUserName;
	userName = new CreateUserObject();
	userName.welcomeUser();
}

submitButton.addEventListener("click", ()=> {
	if(!passwordsMatch()) {
		passwordMatchErrorMessage.classList.add("display-error-message");
	} else {
		createAccount(firstName.value);				

	};	
});


