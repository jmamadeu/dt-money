import { Global } from '@emotion/react';
import { Header } from './components/header';
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <>
      <Header />
      <Global styles={GlobalStyles} />
    </>
  );
}

export default App;
