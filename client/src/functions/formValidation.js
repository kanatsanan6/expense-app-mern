import * as EmailValidator from "email-validator";
import PasswordValidator from "password-validator";

export const isEmailValid = (email) => {
  return EmailValidator.validate(email);
};

export const isUsernameValid = (usename) => {
  return usename.length > 0;
};

export const isPasswordValid = (password) => {
  const Schema_1 = new PasswordValidator();
  const Schema_2 = new PasswordValidator();
  const Schema_3 = new PasswordValidator();
  return {
    minOneUpper: Schema_1.has().uppercase().validate(password),
    minOneLower: Schema_2.has().lowercase().validate(password),
    minEightChar: Schema_3.is().min(8).validate(password),
  };
};

export const isConfirmPasswordValid = (password, confirmPassword, passwordStatus) => {
  if (!passwordStatus) return false;
  return password === confirmPassword;
};
