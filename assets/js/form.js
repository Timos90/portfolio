function validation() {
    const email = document.registration.email.value
    const firstName = document.registration.first_name.value
    const lastName = document.registration.last_name.value
    const gender =  document.registration.gender.value
    const country = document.registration.country.value
    

    if (firstName.length <8) {
        alert("First name should be at least 8 characters")
        return false
    }

    if (lastName.length == 0) {
        alert("Last name should be provided")
        return false
    }

    if (email.endsWith("@dci-student.org") == false) {
        alert("Email should end with @dci-student.org")
        return false
    } 

    if (country == "usa" && gender != "female") {
        alert("We only register females in USA")
        return false
    }
}
    
function activateSubmit() {
    const email = document.registration.email.value
    const firstName = document.registration.first_name.value
    const lastName = document.registration.last_name.value
    const submitBtn = document.getElementById("submit")

    if (email.length > 0 && firstName.length > 0 && lastName.length > 0) {
        //remove "submit-disabled" class from submit button
        submitBtn.classList.remove("submit-disabled")
    } else {
        // add "submit-disabled" class if it doesn't exist
        submitBtn.classList.add("submit-disabled")
    }

}

function countText() {
    const textareaCnt = document.registration.message.value.length
    const para = document.getElementById("text-count")

    if (textareaCnt == 100) {
        // change the color to green
        para.style.color = "green"
    } else {
        // change the color to green
        para.style.color = "red"
    }
    para.textContent = textareaCnt + "/100"
}