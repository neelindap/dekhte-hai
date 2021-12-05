export const genreReducer = (state, action) => {
  console.log(1, action);
  switch (action.type) {
    case "updateSelection": {
      return state.map((genre, index) => {
        if (index === action.index) {
          return { name: genre.name, selected: action.selected };
        }
        return genre;
      });
    }
    case "saveChanges": {
      console.log(1, state);
      localStorage.setItem("genres", JSON.stringify(state));
      return state;
    }
    default:
      throw new Error("unknown action");
  }
};
