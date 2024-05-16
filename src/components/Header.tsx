// export default Header;

import { useSelector } from 'react-redux';
import { ReduxState, User } from '../redux/types';

function Header() {
  const user: User = useSelector((state:ReduxState) => state.user);
  const expenses = useSelector((state:ReduxState) => state.wallet.expenses);

  const getTotalValue = () => {
    let valueResult = 0;
    expenses.forEach((expense) => {
      const { value, currency, exchangeRates } = expense;
      const exchangeRate = parseFloat(exchangeRates[currency].ask);
      const total = (value) * exchangeRate;
      valueResult += total;
    });
    return valueResult.toFixed(2);
  };

  return (
    <header>
      <h3
        data-testid="email-field"
      >
        {`email: ${user.email}`}
      </h3>

      <h3
        data-testid="total-field"
      >
        {getTotalValue()}
      </h3>

      <h3
        data-testid="header-currency-field"
      >
        BRL
      </h3>
    </header>
  );
}

export default Header;
