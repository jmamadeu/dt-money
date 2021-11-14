import imgLogo from '../../assets/logo.svg';

export function Header() {
  return (
    <header>
      <img src={imgLogo} alt="dt-money" />

      <button type="button">New Transaction</button>
    </header>
  );
}
