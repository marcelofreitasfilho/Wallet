export const getCurrenciesApi = async () => {
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((resp) => resp.json());
};
