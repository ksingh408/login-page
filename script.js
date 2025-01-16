
function validateForm() {
        const name = document.getElementById("name").value;
        const email= document.getElementById("email").value;
        const pass = document.getElementById("password").value;
    

        const nameErr = document.getElementById("name-error");
        const emailErr = document.getElementById("email-error");
        const passErr = document.getElementById("password-error");
       

        let isValid = true;
    
        if (name === "") {
            nameErr.style.display="block";
            isValid = false;
        }
 
    
        if (email === "" || !email.includes("@") || !email.includes(".")) {
                emailErr.style.display="block";
            isValid = false;
        }
    
        if (pass === "" || pass.length < 6) {
                passErr.style.display="block";
            isValid = false;
        }
    
    
        if (isValid) {
            alert("Form submitted successfully!");
            return true;
        }
        else {
            return false;
        }
    }
    
    