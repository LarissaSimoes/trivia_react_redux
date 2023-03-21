import { SAVE_PLAYER, SET_SCORE } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
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
  case SET_SCORE: {
    return {
      ...state,
      score: action.score,
    };
  }
  default:
    return state;
  }
};
