export const initialState = 0;

export const reducerFunction = (countState, action) => {
  switch (action) {
    case "increment":
      return countState + 1;
    case "decrement":
      return countState - 1;
    default:
      return countState;
  }
};
