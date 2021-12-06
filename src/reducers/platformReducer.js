export const platformReducer = (state, action) => {
  switch (action.type) {
    case "updateSelection": {
      return state.map((platform, index) => {
        if (index === action.index) {
          return {
            name: platform.name,
            color: platform.color,
            selected: action.selected,
          };
        }
        return platform;
      });
    }
    case "saveChanges": {
      localStorage.setItem("platforms", JSON.stringify(state));
      return state;
    }
    default:
      throw new Error("unknown action");
  }
};
