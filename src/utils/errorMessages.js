export const isRequired = fieldName => `${fieldName} is required`;

export const mustMutch = otherFieldName => fieldName => (
  `${fieldName} must match ${otherFieldName}`;
);

export const minLength = length => fieldName => (
  `${fieldName} must be at least ${length} characters`;
);