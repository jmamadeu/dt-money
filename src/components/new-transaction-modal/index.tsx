import { FormEvent, useContext, useState } from 'react';
import ReactModal from 'react-modal';
import closeImg from '../../assets/close.svg';
import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';
import { TransactionsContext } from '../../contexts/transactions';
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
  const { createTransaction } = useContext(TransactionsContext);
  const [inputValues, setInputValues] = useState({
    title: '',
    value: 0,
    category: '',
    type: 'deposit'
  });

  function handleChangeType(type: string) {
    setInputValues((old) => ({ ...old, type }));
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    await createTransaction(inputValues);

    onRequestClose();

    setInputValues({
      category: '',
      title: '',
      type: 'deposit',
      value: 0
    });
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
      <Container onSubmit={handleSubmit}>
        <h2>Add transaction</h2>

        <input
          type="text"
          name="title"
          value={inputValues.title}
          onChange={(title) =>
            setInputValues((old) => ({ ...old, title: title.target.value }))
          }
          placeholder="Title"
        />
        <input
          type="number"
          name="value"
          placeholder="Value"
          onChange={(event) =>
            setInputValues((old) => ({
              ...old,
              value: Number(event.target.value)
            }))
          }
        />

        <TransactionTypeContainer>
          <RadioBox
            isActive={inputValues.type === 'deposit'}
            type="button"
            activeColor="green"
            onClick={() => handleChangeType('deposit')}
          >
            <img src={IncomeImg} alt="income img" />
            <span>Income</span>
          </RadioBox>
          <RadioBox
            isActive={inputValues.type === 'withdraw'}
            activeColor="red"
            type="button"
            onClick={() => handleChangeType('withdraw')}
          >
            <img src={OutcomeImg} alt="outcome img" />
            <span>Outcome</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          name="category"
          placeholder="Category"
          onChange={(event) =>
            setInputValues((old) => ({
              ...old,
              category: event.target.value
            }))
          }
        />

        <button type="submit">Add</button>
      </Container>
    </ReactModal>
  );
}
