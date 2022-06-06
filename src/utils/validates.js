const defaultRules = [
  {
    data: 'Name',
    regex: /^[a-z ,.'-]+$/i,
    message: 'Enter correct name',
  },
  {
    data: 'Email',
    regex: /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/,
    message: 'Enter a valid email address',
  },
  {
    data: 'Password',
    regex: /^.{6,}$/,
    message: 'Password length must be at least 6 characters',
  },
]

export const validateInput = (value, ruleType, customMessage = '') => {
  if (!value || !ruleType) {
    return null
  }

  const defaults = defaultRules.filter((rule) => rule.data === ruleType)
  const { regex, message } = defaults[0]

  return regex.test(value) ? true : customMessage || message
}
