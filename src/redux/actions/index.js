export const SAVE_PLAYER = 'SAVE_PLAYER';
export const SET_SCORE = 'SET_SCORE';
export const SET_PLAYER_DATA = 'SET_PLAYER_DATA';

export const savePlayer = (gravatarEmail, name) => ({
  type: SAVE_PLAYER,
  gravatarEmail,
  name,
});

export const ActionSetScore = (score) => ({
  type: SET_SCORE,
  score,
});

export const actionPlayerData = (payload) => ({
  type: SET_PLAYER_DATA,
  payload,
});
