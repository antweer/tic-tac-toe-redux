//Write initial state later
export function game(state, action) {
  if (state === undefined){
    return initialState;
  }
  
  switch (action.type){
    case 'CLICK':
      //dosomething
    default:
      return state;
  }
}