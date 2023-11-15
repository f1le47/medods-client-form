const regex = /[A-Za-z]/
const lettersOnlyValidator = (value) => regex.test(value)

export default {
  lettersOnlyValidator
}