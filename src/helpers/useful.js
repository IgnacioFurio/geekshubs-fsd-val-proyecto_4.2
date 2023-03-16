
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

    case "email":

        if (data === "" && required === true) {

        return {message: "Field E-mail required", valid: false};
        
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data)) {

        return {message: "Invalid E-mail format", valid: false};

        }

        return {message: "", valid: true};

    case "password":

        if (data === "" && required === true) {
        return {message: "Field Password required", valid: false};
        } else if (!/.{8,}$/.test(data)) {
        return {message: "Your password must contain at least eight characters", valid: false};
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(data)) {
        return {message: "Your password must contain at least one letter and one number", valid: false};
        };
        return {message: "", valid: true};
        
    default:
        console.log("Fielt not recognized");
    }
};