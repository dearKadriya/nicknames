export default class Validator {
  validateUsername(name) {
    return (!/\d{4}/.test(name) && (/^[^\d\-_][\w-]*[^\d^\-_]$/).test(name));
  }
}
