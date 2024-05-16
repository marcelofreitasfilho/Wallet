// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'SET_USEREMAIL':
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

export default user;
