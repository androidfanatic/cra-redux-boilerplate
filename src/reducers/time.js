export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_TIME':
      return {
        ...state,
        currentTime: action.payload, // todo: change
      }
    default:
      return state
  }
 }