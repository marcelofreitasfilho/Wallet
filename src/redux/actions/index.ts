// ACTIONS
import { getCurrenciesApi } from '../../helpers/api';
import { TypeDispatch, Expense } from '../types';

export const SET_USEREMAIL = 'SET_USEREMAIL';
export const SET_CURRENCIES_API = 'SET_CURRENCIES_API';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const setUserEmail = (email: string) => ({
  type: SET_USEREMAIL,
  payload: email,
});

export const addExpense = (payload: Expense) => ({
  type: ADD_EXPENSE,
  payload,
});

const setCurrencies = (payload: string[]) => ({
  type: SET_CURRENCIES_API,
  payload,
});

export const addExp = (expense: Expense) => {
  return async (dispatch: TypeDispatch) => {
    const currenciesApiReturn = await getCurrenciesApi();
    delete currenciesApiReturn.USDT;
    const newExp = {
      ...expense,
      exchangeRates: currenciesApiReturn,
    };
    dispatch(addExpense(newExp));
  };
};

export const apiAct = () => {
  return async (dispatch: TypeDispatch) => {
    const currenciesApiReturn = await getCurrenciesApi();
    const newCurrns = Object.keys(currenciesApiReturn)
      .filter((currency) => currency !== 'USDT');
    dispatch(setCurrencies(newCurrns));
  };
};
