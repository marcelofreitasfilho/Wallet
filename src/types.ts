// import { AnyAction } from 'redux';
// import { ThunkDispatch } from 'redux-thunk';

// // tipando user (atrasado) e wallet
// export type User = {
//   email: string;
// };

// export type Wallet = {
//   currencies: string[];
//   expenses: Expense[];
//   editor: boolean;
//   idToEdit: number;
// };

// export type ReduxState = {
//   user: User;
//   wallet: Wallet;
// };

// export type Currency = {
//   code: string,
//   codein: string,
//   name: string,
//   ask: string,
// };

// export interface CurrencyResp {
//   [key: string]: Currency;
// }

// export type Expense = {
//   id: number,
//   value: number,
//   currency: string,
//   method: string,
//   tag: string,
//   description: string,
//   exchangeRates: CurrencyResp,
// };

// export type TypeDispatch = ThunkDispatch<ReduxState, unknown, AnyAction>;
