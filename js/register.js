document.getElementById("registro-form").addEventListener("submit", function(event) {
    

    const email = document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const terms=document.getElementById("terms").checked;

    const emailError=document.getElementById("email-error");
    const passwordError=document.getElementById("password-error");

    let valido=true;

    if(!email){
        emailError.textContent="Por favor complete el campo Email!!";
        valido=false;
    }else{
        emailError.textContent="";
    }
    if(!password){
        passwordError.textContent="Por favor complete el campo Password!!";
        valido=false;
    }else{
        passwordError.textContent="";
    }
    if(!terms){
        alert("acepte los terminos y condiciones");
        valido=false
    }

    if(!valido){
        event.preventDefault();

    }

})