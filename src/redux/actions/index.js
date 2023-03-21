export const SAVE_PLAYER = 'SAVE_PLAYER';
export const SET_SCORE = 'SET_SCORE';

export const savePlayer = (gravatarEmail, name) => ({
  type: SAVE_PLAYER,
  gravatarEmail,
  name,
});

export const ActionSetScore = (score) => ({
  type: SET_SCORE,
  score,
});
