const yup = require('yup');

const contactFormSchema = yup.object().shape({
    name: yup.string().required("Name is required").min(5, "Name is too short"),
    email: yup.string().required("Email is required").email("Invalid email"),
    message: yup.string().required("Message is required").min(10, "Message is too short")
});

module.exports = {contactFormSchema};