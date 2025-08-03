function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phone").value;
    var donation = document.querySelector('input[name="donation"]:checked');

    if (name === "" || email === "" || password === "" || donation === null|| phone === "") {
        alert("All fields are required.");
        return false;
    }
    if(!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)) {
        alert("Password must be at least 8 characters long and contain at least one number, one lowercase letter, and one uppercase letter.");
        return false;
    }
    if(!/^[a-zA-Z]+$/.test(fname) || !/^[a-zA-Z]+$/.test(lname)) {
        alert("First name and Last name must contain only letters.");
        return false;
    }
    if(!/^[0-9]+$/.test(phone)) {
        alert("Phone number must contain only digits.");
        return false;
    }
    alert("Form submitted successfully!");
     return true;
    }
