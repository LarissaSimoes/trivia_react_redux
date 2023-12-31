import { SAVE_PLAYER, SET_PLAYER_DATA, SET_SCORE } from '../actions';

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
      score: state.score + action.score,
      assertions: state.assertions + 1,
    };
  }
  case SET_PLAYER_DATA: {
    return {
      ...state,
      ...action.payload,
    };
  }
  default:
    return state;
  }
};

export default player;
