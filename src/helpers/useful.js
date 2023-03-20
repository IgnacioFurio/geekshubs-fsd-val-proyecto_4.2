
export const validate = (name, data, required) => {
    switch (name) {
    // case "name":
    // case "surname":

    //     if (data === "" && required === true) {

        
    //     return {message: "Please fill the field", validated: false};

    //     } else if (!/[a-z]/gi.test(data)) {
    //     return {message: "Please fill with a valid text", validated: false};
    //     }

    //     return {message: "", validated: true};
    case "user":
    case "username":

        if(data === "" && required === true){

        return {message: "Field 'User' required.", valid: false};

        } else if (!/^(?=.{8,20}$).*/.test(data)) {

            return {message: "User name must have a minimum of 8 characters and a maximum of 20 characters.", valid: false};

        } else if (!/^[A-Za-z][A-Za-z0-9_]/.test(data)) {

            return {message: "Your name only can contain alphanumeric characters.", valid: false};

        };

        return {message: "", valid: true};

    case "email":

        if (data === "" && required === true) {

        return {message: "Field 'Email' required.", valid: false};
        
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data)) {

        return {message: "Invalid E-mail format.", valid: false};

        }

        return {message: "", valid: true};

    case "password":

        if (data === "" && required === true) {

        return {message: "Field 'Password' required.", valid: false};

        } else if (!/.{8,}$/.test(data)) {

        return {message: "Your password must contain at least eight characters.", valid: false};
        
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(data)) {

        return {message: "Your password must contain at least one letter and one number.", valid: false};
        
        };

        return {message: "", valid: true};

    case "password2":

    if (data === "" && required === true) {

        return {message: "Field 'Confirm Password' required", valid: false};
    
    };

    return {message: "", valid: false}

    default:
        console.log("Error not recognized");
    }
};