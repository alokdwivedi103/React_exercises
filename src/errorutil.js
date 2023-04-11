export const validateFormData = (formData) => {
    const errors = {};
    if (!formData.loginId) {
        errors.loginId = "Login ID is required";
    }
    if (!formData.email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "Invalid email format";
    }
    if (!formData.name) {
        errors.name = "Name is required";
    }
    if (document.querySelector("select").value === "") {
        errors.timezone = "Timezone is required";
    }
    if (!formData.homePage) {
        errors.homePage = "Home page is required";
    } else if (
        !/^(http|https):\/\/[a-zA-Z0-9]+([\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,20}(:[0-9]{1,5})?(\/.*)?$/.test(
            formData.homePage
        )
    ) {
        errors.homePage = "Invalid URL format";
    }
    // if (formData.aboutMe.length <= 0 || formData.aboutMe.length < 50) {
    //     console.log(formData.aboutMe.length);
    //     errors.aboutMe = "About Me must be at least 50 characters";
    // }
    if (!formData.receiveNotifications) {
        errors.receiveNotifications = "You must accept to receive notifications";
    }
    return errors;
};