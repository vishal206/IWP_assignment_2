function validateForm() {
    var email = document.LoginForm.lemail.value;
    var pwd = document.LoginForm.password.value;
    var at = email.indexOf('@');
    var dot = email.lastIndexOf(".");
    alert("working");
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


  function ajaxValidateEmail(){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email.value) == false)
    {
    $("#message").html("Invalid Email Address");
    return false;
    }
    $("#message").html("");
    return true;
  }

  function ajaxValidatePwd(){
      //check empty password field 
 if(pw == "") { 
    document.getElementById("message").innerHTML = "**Fill the password!"; 
    return false; 
    } 
    
   //minimum password length validation 
    if(pw.length < 8) { 
    document.getElementById("message").innerHTML = "**Password length must be at least 8 characters"; 
    return false; 
    } 
    
   //maximum length of password validation 
    if(pw.length > 15) { 
    document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters"; 
    return false; 
    } else { 
    alert("Password is correct"); 
    } 
  }

  $(document).ready(function(){
    $("#checkValidation").click(function(){
    var email = $("#email").val().trim();
    var password = $("#psw").val().trim();
    $.ajax({
    url:'index.php',
    type:'post',
    data:{email:email,password:password},
    success:function(response){
    $("#message").html(response);
    }
    });
    });
   });