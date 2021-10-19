function validateForm() {
    var email = document.LoginForm.lemail.value;
    var pwd = document.LoginForm.password.value;
    var at = email.indexOf('@');
    var dot = email.lastIndexOf(".");
    if (email == null || email == "") {
        alert("email can't be blank");
        return false;
    } else if (at < 1 || dot < at + 2 || dot + 2 >= email.length) {
        alert("enter a valid email");
        return false;
    } else if (pwd.length < 8) {
        alert("password must be atleast 8 character long");
        return false;
    }
}

function registerValidation() {
    var name = document.registerForm.Fullname.value;
    var email = document.registerForm.Email.value;
    var dob = document.registerForm.dob.value;
    var pwd = document.registerForm.password.value;
    var re_pwd = document.registerForm.Repassword.value;
    var country = document.registerForm.country.value;
    var state = document.registerForm.State.value;
    var address = document.registerForm.Address.value;
    var pin = document.registerForm.Pin_Code.value;

    var notification1 = document.registerForm.notification1;
    var notification12 = document.registerForm.notification2;

    // NAME VALIDATION
    if (name == "" || name == null) {
        alert("enter your name");
        return false;
    }

    // EMAIL VALIDATION
    var at = email.indexOf('@');
    var dot = email.lastIndexOf(".");

    if (email == "" || email == null) {
        alert("enter your email");
        return false;
    } else if (at < 1 || dot < at + 2 || dot + 2 >= email.length) {
        alert("enter a valid email");
    }

    // DATE OF BIRTH VALIDATION
    if (dob == "" || dob == null) {
        alert("enter your date of birth");
        return false;
    }

    // PASSWORD VALIDATION
    if (pwd.length < 8) {
        alert("password should be of atleast 8 character");
        return false;
    }

    // RE ENTER PASSWORD VALIDATION
    if (re_pwd.length == 0) {
        alert("enter your password again");
        return false;
    }

    if (pwd != re_pwd) {
        alert("password isn't matching");
        return false;
    }

    // COUNTRY VALIDATION
    if (country == "" || country == null || country == "select") {
        alert("select your country");
        return false;
    }

    // STATE VALIDATION
    if (state == "" || state == null || state == "select") {
        alert("select your state");
        return false;
    }

    // ADDRESS VALIDATION
    if (address == "" || address == null) {
        alert("enter your address");
        return false;
    }
    // PIN VALIDATION
    if (pin == "" || pin == null) {
        alert("enter your address pin code");
        return false;
    }

    // NOTIFICATION VALIDATION
    if (!notification1.checked && !notification2.checked) {
        alert("select atleast one notification method");
        return false;
    }

}