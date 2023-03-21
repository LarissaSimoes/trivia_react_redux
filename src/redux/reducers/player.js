import { SAVE_PLAYER } from '../actions';

const INITIAL_STATE = {
  gravatarEmail: '',
  name: '',
  score: 0,
};

export const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_PLAYER: {
    return {
      ...state,
      name: action.name,
      gravatarEmail: action.gravatarEmail,
    };
  }
  default:
    return state;
  }
};

// export default player;
