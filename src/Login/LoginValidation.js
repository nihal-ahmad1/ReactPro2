function Validation(values){
    let error={};
    const email_Regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const password_regex=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/

    if(values.email===""){
        error.email="Email is required"
    }else if(!email_Regex.test(values.email)){
        error.email="Email is incorrect"
    }else{
        error.email="";
    }

    if(values.password===""){
        error.password="Password is required"
    }else if(!password_regex.test(values.password)){
        error.password="Password minimum length should be 6 characters."
    }else{
        error.password="";
    }
    return error;
}
export  default Validation