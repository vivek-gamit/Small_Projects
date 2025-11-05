let btn = document.querySelector('button')

btn.addEventListener('click',(dets)=>{
    dets.preventDefault()
    let input = document.querySelector('input')

    let Email = document.getElementById('Email').value.trim()
    let Password = document.getElementById('Password').value.trim()

    let emailerror = document.getElementById('emailerror')
    let passworderror = document.getElementById('passworderror')

    let isvalid = true
    //email
    if(Email === ""){
        emailerror.textContent = "Email is required"
        isvalid = false
    }else if(!isvalidemail(Email)){
        emailerror.textContent = "Invalid Email"
        isvalid = false
    }else{
        emailerror.textContent = ""
    }
    //password
    if(Password === ""){
        passworderror.textContent = "Password is required"
        isvalid = false
    }else if(Password.length < 8){
        passworderror.textContent = "Password must be 8 digit"
        isvalid = false
    }else{
        passworderror.textContent = ""
    }

    //all true
    if(isvalid){
        alert("Welcome back")
        document.getElementById('loginForm').reset();
        emailerror.textContent = "";
        passworderror.textContent = "";
    }

})

//isvalidemail function

function isvalidemail(Email){
    if(!Email.includes("@")) return false;
    if(!Email.includes(".")) return false;

    let atpos = Email.indexOf('@')
    let dotpos = Email.lastIndexOf('.')

    if(atpos < 1 || dotpos < atpos+2 || dotpos === Email.length-1){
        return false
    }

    return true
}