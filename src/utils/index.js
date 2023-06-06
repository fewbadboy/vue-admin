export function notEmpty (name) {
  return (param) => {
    if (!param || param.trim() === '') {
      return `${name} is required`
    } else {
      return true
    }
  }
}
