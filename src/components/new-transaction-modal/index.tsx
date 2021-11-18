import { useState } from 'react';
import ReactModal from 'react-modal';
import closeImg from '../../assets/close.svg';
import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';
import { Container, RadioBox, TransactionTypeContainer } from './styles';

ReactModal.setAppElement('#root');

interface NewTransactionModalProperties {
  onRequestClose: () => void;
  isOpen: boolean;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose
}: NewTransactionModalProperties) {
  const [type, setType] = useState('deposit');

  function handleChangeType(newType: string) {
    setType(newType);
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="close modal" />
      </button>
      <Container>
        <h2>Add transaction</h2>

        <input type="text" name="title" placeholder="Title" />
        <input type="number" name="value" placeholder="Value" />

        <TransactionTypeContainer>
          <RadioBox
            isActive={type === 'deposit'}
            type="button"
            activeColor="green"
            onClick={() => handleChangeType('deposit')}
          >
            <img src={IncomeImg} alt="income img" />
            <span>Income</span>
          </RadioBox>
          <RadioBox
            isActive={type === 'withdraw'}
            activeColor="red"
            type="button"
            onClick={() => handleChangeType('withdraw')}
          >
            <img src={OutcomeImg} alt="outcome img" />
            <span>Outcome</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input type="text" name="category" placeholder="Category" />

        <button type="submit">Add</button>
      </Container>
    </ReactModal>
  );
}
