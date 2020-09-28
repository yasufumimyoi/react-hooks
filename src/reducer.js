export const initialState = [
  { id: 1, title: "Hey" },
  { id: 2, title: "Good" },
  { id: 3, title: "Cool" },
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, { id: action.id, title: action.title }];
    case "remove":
      return state.filter((item) => item.id != action.id);
    default:
      return state;
  }
};
