
export const validate = (name, data, required) => {
    switch (name) {
    
    // REAL NAMES
    case "name":
    case "surname":

        if (data === "" && required === true) {
        
        return {message: "Please fill the field", valid: false};

        } else if (!/[a-z]/.test(data)) {

        return {message: "Please fill with a valid text", valid: false};

        };

        return {message: "", valid: true};

    // USERNAME
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

    // EMAIL
    case "email":

        if (data === "" && required === true) {

        return {message: "Field 'Email' required.", valid: false};
        
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data)) {

        return {message: "Invalid E-mail format.", valid: false};

        }

        return {message: "", valid: true};

    //PASSWORD
    case "password":

        if (data === "" && required === true) {

        return {message: "Field 'Password' required.", valid: false};

        } else if (!/.{8,}$/.test(data)) {

        return {message: "Your password must contain at least eight characters.", valid: false};
        
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(data)) {

        return {message: "Your password must contain at least one letter and one number.", valid: false};
        
        };

    return {message: "", valid: true};

    //CONFIRM PASSWORD

    case "password2":

        if (data === "" && required === true) {

            return {message: "Field 'Confirm Password' required", valid: false};
        
        };

    return {message: "", valid: false};

    //DNI
    case "DNI":

        if (data === "" && required === true) {

            return {message: "Field 'DNI' required", valid: false};

        } else if (!/^[0-9]{8}[a-zA-Z]{1}?$/.test(data)) {

            return {message: "'DNI' must have 8 numbers and 1 character", valid: false};

        };

    return {message: "", valid: true};

    // PHONE NUMBER SPAIN
    case "phone_number":

        if (data === "" && required === true) {

            return {message: "Field 'phone number' required", valid: false};

        } else if (!/^[\+]?[(]?[0-9]{2}[)]?[-\s\.]?[0-9]{3}?[-\s\.]?[0-9]{3}?[-\s\.]?[0-9]{3}$/.test(data)) {

            return {message: "Phone number needs the area code plus the phone number", valid: false};

        };

    return {message: "", valid: true};

    // POSTAL CODE SPAIN    

    case "post_code":

        if (data === "" && required === true) {

            return {message: "Field 'Post code' required", valid: false};

        } else if (!/^[0-9]{5}$/.test(data)) {

            return {message: "Postal code must have 5 numbers", valid: false};

        };

    return {message: "", valid: true};
    


    default:
        console.log("Error not recognized");
    }
};