
const submitButton = document.querySelector("button");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");

const passwordsMatch = ()=> {
	return (password1.value === password2.value)
}


submitButton.addEventListener("click", ()=> {
	console.log("no match");
	
});
