import { Container } from './styles';

export function TransactionsTable() {
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
          <tr>
            <td className="title">Websites development</td>
            <td className="deposit">12K</td>
            <td>Income</td>
            <td>12:10:2012</td>
          </tr>
          <tr className="title">
            <td>Websites development</td>
            <td className="withdraw">12K</td>
            <td>Income</td>
            <td>12:10:2012</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
