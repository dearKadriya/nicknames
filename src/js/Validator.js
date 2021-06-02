export default class Validator {
  validateUsername(name) {
    if (!/\d{4}/.test(name)) {
      return (/^[^\d\-_]\w*\d*-*[^\d^\-_]$/).test(name);
    } return false;
  }
}
