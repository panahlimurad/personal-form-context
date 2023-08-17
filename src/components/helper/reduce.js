export const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_FIRST_NAME":
        return { ...state, firstName: action.payload };
      case "CHANGE_LAST_NAME":
        return { ...state, lastName: action.payload };
      case "CHANGE_EMAIL":
        return { ...state, email: action.payload };
      case "CHANGE_BIOGRAPHY":
        return { ...state, biography: action.payload };
      case "CHANGE_PROFILE_IMAGE":
            return { ...state, profileImage: action.payload };
        default:
            return state
    }
}