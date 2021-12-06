export const genreReducer = (state, action) => {
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
      localStorage.setItem("genres", JSON.stringify(state));
      return state;
    }
    default:
      throw new Error("unknown action");
  }
};
