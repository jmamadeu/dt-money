import { useContext } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../contexts/transactions';
import { formatNumber } from '../../utils/format-number';
import { Container } from './styles';

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const totalDeposits = transactions.reduce((accumulator, transaction) => {
    if (transaction.type === 'deposit') {
      accumulator += transaction.value;
    }

    return accumulator;
  }, 0);

  const summary = transactions.reduce(
    (accumulator, transaction) => {
      if (transaction.type === 'deposit') {
        accumulator.deposits += transaction.value;
        accumulator.total += transaction.value;
      } else {
        accumulator.withdraws += transaction.value;
        accumulator.total -= transaction.value;
      }

      return accumulator;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Incomes</p>
          <img src={incomeImg} alt="income img" />
        </header>

        <strong>{formatNumber(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Outcomes</p>
          <img src={outcomeImg} alt="outcome img" />
        </header>

        <strong>{formatNumber(summary.withdraws)}</strong>
      </div>
      <div className="highlighted">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total img" />
        </header>

        <strong>{formatNumber(summary.total)}</strong>
      </div>
    </Container>
  );
}
