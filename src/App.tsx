import { Global } from '@emotion/react';
import { Dashboard } from './components/dashboard';
import { Header } from './components/header';
import { TransactionsTable } from './components/transactions-table';
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <TransactionsTable />
      <Global styles={GlobalStyles} />
    </>
  );
}

export default App;
