function validateForm(){

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    let isValid = true;

    // Reset errors
    emailError.innerText = "";
    passwordError.innerText = "";

    // Email validation
    if(email === ""){
        emailError.innerText = "Email is required";
        isValid = false;
    }
    else if(!email.includes("@")){
        emailError.innerText = "Enter valid email";
        isValid = false;
    }

    // Password validation
    if(password === ""){
        passwordError.innerText = "Password is required";
        isValid = false;
    }
    else if(password.length < 6){
        passwordError.innerText = "Password must be at least 6 characters";
        isValid = false;
    }

    // Success
    if(isValid){
        alert("Login Successful ✅");
    }
}