export const setStore = (state, propertyName, value) => {
  return {
    ...state,
    [propertyName]: value,
  };
};
