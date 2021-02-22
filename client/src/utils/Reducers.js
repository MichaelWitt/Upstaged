export const profileReducer = (state, action) => {
    switch (action.type) {
    case "addPoints":
        console.log("state.points + action", state.points + action.value);
      return { ...state, points: state.points + action.value };
    case "setEnsemble":
      return { ...state, level: 'Ensemble', maxPoints: 100 };
    case "setFeaturedEnsemble":
      return { ...state, level: 'Featured Ensemble', maxPoints: 200 };
    case "setPrincipal":
      return { ...state, level: 'Principal', maxPoints: 350 };
    case "setLeadActor":
      return { ...state, level: 'Lead Actor', maxPoints: 600 };
    case "setStar":
      return { ...state, level: 'Star', maxPoints: 900 };
    case "setLegend":
      return { ...state, level: 'Legend', isLegend: true };
    case "revealPersona":
      return { ...state, level: 'Legend', isLegend: true };
    case "hidePersona":
      return { ...state, level: 'Legend', isLegend: true };
    case "setName":
      return { ...state, name: action.value };
    case "setPoints":
      return { ...state, points: action.value };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
    }
  };