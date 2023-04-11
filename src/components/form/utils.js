const EMAILREGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URLREGEX = /^((http|https):\/\/)?[a-zA-Z0-9]+([\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,20}(:[0-9]{1,5})?(\/.*)?$/;

export const validateFormData = (formData) => {
    const errors = {};
    if (!formData.loginId) {
        errors.loginId = "Login ID is required";
    }
    if (!formData.email) {
        errors.email = "Email is required";
    } else if (!EMAILREGEX.test(formData.email)) {
        errors.email = "Invalid email format";
    }
    if (!formData.name) {
        errors.name = "Name is required";
    }
    if (!formData.timezone) {
        errors.timezone = "Timezone is required";
    }
    if (!formData.homePage) {
        errors.homePage = "Home page is required";
    } else if (
        !URLREGEX.test(
            formData.homePage
        )
    ) {
        errors.homePage = "Invalid URL format";
    }
    if (formData.aboutMe.length <= 50) {
        errors.aboutMe = "About Me must be at least 50 characters";
    }
    if (!formData.receiveNotifications) {
        errors.receiveNotifications = "You must accept to receive notifications";
    }
    return errors;
};