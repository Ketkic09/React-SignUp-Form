
export default function validationInfo(values) {
    let errors = {}

    if(!values.username.trim()){
        errors.username = "Username required!"
    }
    if(!values.email.trim()){
        errors.email = "Email required!"
    } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(values.email)){
        errors.email = "Wrong Email pattern"
    }
    if(!values.password){
        errors.password = "Password Required!"

    }
    //Minimum eight characters, at least one letter, one number and one special character:
    else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(values.password)){
        errors.password = "Minimum eight characters, at least one letter, one number and one special character"
    }
    if(!values.password2){
        errors.password2 = "Please re-enter your password"
    }
    else if(values.password !== values.password2){
        errors.password2 = "Passwords don't match!"
    }

    return errors;
}   