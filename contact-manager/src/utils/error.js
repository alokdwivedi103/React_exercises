const EMAILREGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const validateFormData = (formData) => {
  const errors = {};
  if (!formData.firstName) {
    errors.firstName = "Please enter a first name";
  }
  if (!formData.lastName) {
    errors.lastName = "Please enter a last name";
  }
  if (!formData.email) {
    errors.email = "Email is required";
  } else if (!EMAILREGEX.test(formData.email)) {
    errors.email = "Invalid email format";
  }
  return errors;
};
