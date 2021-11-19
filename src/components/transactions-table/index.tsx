import { useContext } from 'react';
import { TransactionsContext } from '../../contexts/transactions';
import { Container } from './styles';

export function TransactionsTable() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('en-IN', {
                  currency: 'USD',
                  style: 'currency'
                }).format(transaction.value)}
              </td>
              <td>{transaction.type}</td>
              <td>
                {new Intl.DateTimeFormat('en-US').format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
