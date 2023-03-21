const tokenEndpoint = 'https://opentdb.com/api_token.php?command=request';
export const TOKEN_KEY = 'token';

async function getToken() {
  const response = await fetch(tokenEndpoint);
  const tokenData = await response.json();
  return tokenData.token;
}

export const saveToken = async () => {
  const token = await getToken();
  if (!token) throw new Error('Erro ao obter token');

  localStorage.setItem(TOKEN_KEY, token);
};
