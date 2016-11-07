export const ruleRunner = (field, name, ...validations) => (state) => {
  for (let v of validations) {
    let errorMessageFunction = v(state[field], state);
    if (errorMessageFunction) {
      return { [field]: errorMessageFunction(name) };
    }
  }

  return null;
};

export const run = (state, runners) => {
  return runners.reduce((memo, runner) => {
    return Object.assign(memo, runner(state));
  }, {});
};