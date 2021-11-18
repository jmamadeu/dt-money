import { useEffect } from 'react';
import { Container } from './styles';

export function TransactionsTable() {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions').then(data => 
        data.json().then(dataParsed => {
          console.log(dataParsed)
        })
    )
  }, [])
  

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
            <td>Websites development</td>
            <td className="deposit">12K</td>
            <td>Income</td>
            <td>12:10:2012</td>
          </tr>
          <tr>
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
