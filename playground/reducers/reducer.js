export const initialState = [
  { id: 1, title: "Hey", body: "You look great" },
  { id: 2, title: "Good", body: "It looks fine" },
  { id: 3, title: "Cool", body: "You must be kidding" },
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: action.id, title: action.title, body: action.body },
      ];
    case "remove":
      return state.filter((item) => item.id != action.id);
    default:
      return state;
  }
};
