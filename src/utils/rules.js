import * as ErrorMessages from './errorMessages';

export const required = (text) => {
  return text ? null : ErrorMessages.isRequired;
};

export const mustMatch = (field, fieldName) => (text, state) => {
  return state[field] === text ? null : ErrorMessages.mustMatch(fieldName);
};

export const minLength = (length) => (text) => {
  return text.length >= length ? null : ErrorMessages.minLength(length);
};