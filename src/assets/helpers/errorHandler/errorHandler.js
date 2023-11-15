const errorHandler = (valueField) => {
  const keys = Object.keys(valueField);

  // All types of possible errors
  let requiredError = false;
  let numericError = false;
  let onlyLettersError = false;
  let isDirty = false;

  keys.forEach(key => {
    switch(key) {
      case 'required':
        requiredError = valueField[key];
        break;
      case 'numeric':
        numericError = valueField[key];
        break;
      case 'lettersOnlyValidator':
        onlyLettersError = valueField[key];
        break;
      case '$dirty':
        isDirty = valueField[key]
        break;
    }
  })

  return {
    requiredError,
    numericError,
    onlyLettersError,
    isDirty
  }
}

export default errorHandler