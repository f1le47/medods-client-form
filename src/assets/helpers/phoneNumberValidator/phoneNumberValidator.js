const phoneRegex = /7([0-9]{10})/
const phoneNumberValidator = (value) => phoneRegex.test(value);

export default {
  phoneNumberValidator
}