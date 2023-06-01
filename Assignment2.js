function userName(){
    console.log("hi");
    var x= document.getElementById("uname");
    var len=x.value.length;
    if (len==0 || len < 3 || len > 25) {
        x.style.borderColor ="red";
        document.getElementById("userreq").innerHTML="Cannot be blank and Must have at least 3 character and Cannot exceed 25 characters";
        } 
    else {
        x.style.borderColor="green";
        document.getElementById("userreq").innerHTML="";
    }
}
function Mail(){
    var d= document.getElementById("email").value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const y = emailPattern.test(d);
    if(y){
        document.getElementById("email").style.borderColor="green";
        document.getElementById("validateemail").innerHTML="";
    }
    else{
        document.getElementById("email").style.borderColor="red";
        document.getElementById("validateemail").innerHTML="Please Enter A Valid Email Address";
    }   
}
function passKey(){
    var v= document.getElementById("password").value;
    function validPassword(pass) {
        var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[! @ # $ % ^ & * ( ) _ - = +]).+$/;
        return passwordPattern.test(pass);
    }
    var isValid = validPassword(v);
    if(v.length>=8){
        if(isValid==true){
            document.getElementById("password").style.borderColor="green";
            document.getElementById("passwordrequirement").innerHTML="";
        }
        else{
            document.getElementById("password").style.borderColor="red";
            document.getElementById("passwordrequirement").innerHTML="Password Must be atleast 8 characters long that include atleast 1 lowercase character, 1 uppercase character, 1 numerical, and 1 special character from the set (!@#$%^&*).";
        }
    }
    else if (v.length<8){
        document.getElementById("password").style.borderColor="red";
        document.getElementById("passwordrequirement").innerHTML="Password Must be atleast 8 characters long that include atleast 1 lowercase character, 1 uppercase character, 1 numerical, and 1 special character from the set (!@#$%^&*).";
    }
    else {
        document.getElementById("password").style.borderColor="red";
        document.getElementById("passwordrequirement").innerHTML="Password Must be atleast 8 characters long that include atleast 1 lowercase character, 1 uppercase character, 1 numerical, and 1 special character from the set (!@#$%^&*).";
    }
}
function confirmPass(){
    var actual = document.getElementById("password").value;
    var reentered = document.getElementById("Re-entered").value;
    if(actual==reentered){
        document.getElementById("Re-entered").style.borderColor="green";
        document.getElementById("passwordmatch").innerHTML="";
    }
    else{
        document.getElementById("Re-entered").style.borderColor="red";
        document.getElementById("passwordmatch").innerHTML="password and the re-entered password must match";
    }
}
function show_P(){
    document.getElementById("password").setAttribute("type", "password");
    document.getElementById("togglePassword").setAttribute("class", "fa fa-eye");
}
function hide_P(){
    document.getElementById("password").setAttribute("type", "text");
    document.getElementById("togglePassword").setAttribute("class", "fa fa-eye-slash");
}