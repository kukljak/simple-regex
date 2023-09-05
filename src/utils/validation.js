export const validateString = (str, maxLength) => {
  const regex = new RegExp(`^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[!"#$%&'()*+,-./:;<=>?@\\[\\]^_\`{|}~])\\S{1,${maxLength}}$`);
  return regex.test(str);
}