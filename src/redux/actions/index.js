export const SAVE_PLAYER = 'SAVE_PLAYER';

export const savePlayer = (gravatarEmail, name) => ({
  type: SAVE_PLAYER,
  gravatarEmail,
  name,
});
