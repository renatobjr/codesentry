const validator = {
  isRequired: (value) => {
    if (value ) return true;
    return 'Field is required'
  },
  isEmail: (value) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(value) || 'Invalid e-mail'
  },
  isSelected: (value) => {
    if (value) return true;
    return 'Select an option'
  },
  isMathcing: (value, match) => {
    console.log(value, match)
    if (value === match) return true;
    return 'Password does not match'
  },
}

export default validator;
