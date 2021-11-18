import { Global } from '@emotion/react';
import { useState } from 'react';
import { Dashboard } from './components/dashboard';
import { Header } from './components/header';
import { NewTransactionModal } from './components/new-transaction-modal';
import { TransactionsTable } from './components/transactions-table';
import { GlobalStyles } from './styles/global';

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <>
      <Header onButtonClick={handleOpenNewTransactionModal} />
      <Dashboard />
      <TransactionsTable />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <Global styles={GlobalStyles} />
    </>
  );
}

export default App;
