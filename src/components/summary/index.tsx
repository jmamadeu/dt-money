import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { Container } from './styles';

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Incomes</p>
          <img src={incomeImg} alt="income img" />
        </header>

        <strong>AOA 1000</strong>
      </div>
      <div>
        <header>
          <p>Incomes</p>
          <img src={outcomeImg} alt="outcome img" />
        </header>

        <strong>AOA 1000</strong>
      </div>
      <div className="highlighted">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total img" />
        </header>

        <strong>AOA 1000</strong>
      </div>
    </Container>
  );
}
