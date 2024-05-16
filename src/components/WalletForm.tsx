import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TypeDispatch, Expense, ReduxState } from '../redux/types';
import { apiAct, addExp } from '../redux/actions';

const INITIAL_STATE: Expense = {
  id: 0,
  description: '',
  value: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  exchangeRates: {},
};

function WalletForm() {
  const dispatch: TypeDispatch = useDispatch();
  const [exp, setExp] = useState<Expense>(INITIAL_STATE);
  const payForm = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
  const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
  const { currencies } = useSelector((state: ReduxState) => state.wallet);

  useEffect(() => {
    dispatch(apiAct());
  }, [dispatch]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> |
  React.ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = event.target;
    setExp({
      ...exp,
      [id]: value,
    });
  };

  const addExpenseBtnFunc = () => {
    const expense = exp;
    dispatch(addExp(expense));
    setExp(INITIAL_STATE);
  };
  return (
    <>
      <div>
        <label htmlFor="description">
          Descrição
          <input
            data-testid="description-input"
            type="text"
            id="description"
            value={ exp.description }
            onChange={ (e) => handleChange(e) }
          />
        </label>
      </div>

      <div>
        <label htmlFor="value">
          Valor
          <input
            data-testid="value-input"
            type="number"
            id="value"
            value={ exp.value }
            onChange={ (e) => handleChange(e) }
          />
        </label>
      </div>

      <div>
        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
            data-testid="currency-input"
            value={ exp.currency }
            onChange={ (e) => handleChange(e) }
          >
            {currencies.map((currency) => (
              <option
                key={ currency }
                id={ currency }
              >
                {currency}
              </option>))}
          </select>
        </label>
      </div>

      <div>
        <label htmlFor="method">
          Método de Pagamento
          <select
            id="method"
            data-testid="method-input"
            value={ exp.method }
            onChange={ (e) => handleChange(e) }
          >
            {payForm.map((method) => (
              <option
                key={ method }
                value={ method }
              >
                {method}
              </option>))}
          </select>
        </label>
      </div>

      <div>
        <label htmlFor="tag">
          Categoria
          <select
            id="tag"
            value={ exp.tag }
            data-testid="tag-input"
            onChange={ (e) => handleChange(e) }
          >
            {tags.map((tag) => (
              <option
                key={ tag }
                value={ tag }
              >
                {tag}
              </option>
            ))}
          </select>
        </label>
      </div>

      <button
        onClick={ addExpenseBtnFunc }
      >
        Adicionar Despesa
      </button>
    </>
  );
}

export default WalletForm;
