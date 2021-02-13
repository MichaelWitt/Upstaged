export const profileReducer = (state, action) => {
    switch (action.type) {
    case "add":
        console.log("state.points + action", state.points + action.value);
      return { ...state, points: state.points + action.value };
    case "subtract":
      return { points: state.points - 50 };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
    }
  };