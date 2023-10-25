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
  }
}

export default validator;
