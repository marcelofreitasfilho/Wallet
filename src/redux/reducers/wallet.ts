import { Expense, Wallet } from '../types';
import { ADD_EXPENSE, SET_CURRENCIES_API } from '../actions';

const INITIAL_STATE: Wallet = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,

};

const wallet = (state: Wallet = INITIAL_STATE, action: any) => {
  const expId = state.expenses.length === 0
    ? 0
    : state.expenses[state.expenses.length - 1].id + 1;
  const newExp = { ...action.payload, id: expId } as Expense;

  switch (action.type) {
    case SET_CURRENCIES_API:
      action.payload as string[];
      return ({
        ...state,
        currencies: [...action.payload],
      });
    case ADD_EXPENSE:
      action.payload as Expense;
      return ({
        ...state,
        expenses: [...state.expenses, newExp],

      });
    default: return state;
  }
};

export default wallet;
