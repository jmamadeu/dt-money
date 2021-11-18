import imgLogo from '../../assets/logo.svg';
import { Container, Content } from './styles';

export interface HeaderProperties {
  onButtonClick?: () => void;
}

export function Header({ onButtonClick }: HeaderProperties) {
  return (
    <Container>
      <Content>
        <img src={imgLogo} alt="dt-money" />

        <button onClick={onButtonClick} type="button">
          New Transaction
        </button>
      </Content>
    </Container>
  );
}
