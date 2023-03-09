const canYouInput = document.querySelector("#canyou-input-field");
const submitButton = document.querySelector(".button")
const blockButton = document.querySelector(".block-button")
const form = document.querySelector(".form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(canYouInput)
    if (canYouInput.value !== ""){
        const successAlert = document.querySelector(".success-alert");
        successAlert.style.display = "block";
    
        setTimeout(() => {
          form.reset() 
          successAlert.style.display = "none";
        }, 1000);
    }

})