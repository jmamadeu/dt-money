import { Global } from '@emotion/react';
import { Dashboard } from './components/dashboard';
import { Header } from './components/header';
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <Global styles={GlobalStyles} />
    </>
  );
}

export default App;
