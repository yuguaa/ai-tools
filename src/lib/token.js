import md5 from "js-md5";
const TOKEN_KEY_SALT = 'PINE-STORM';
const TOKEN_VALUE_SALT = 'PINE-STORM-VALUE';
const genTokenValue = (userName) => {
  return md5(`${userName}${TOKEN_VALUE_SALT}`);
}

export const getToken = () => {
  const tokenValue = localStorage.getItem(TOKEN_KEY_SALT);
  return tokenValue;
}
export const setToken = (userName) => {
  const tokenValue = genTokenValue(userName);
  localStorage.setItem(TOKEN_KEY_SALT, tokenValue);
}