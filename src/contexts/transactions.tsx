import React, { createContext, useEffect, useState } from 'react';
import { api } from '../services/api';

export type TransactionProperties = {
  id: number;
  title: string;
  type: string;
  value: number;
  createdAt: Date;
};

type TransactionInput = Omit<TransactionProperties, 'id' | 'createdAt'>;

export type TransactionResponseProperties = {
  transactions: TransactionProperties[];
};

export type CreateTransactionResponseProperties = {
  transaction: TransactionProperties;
};

type TransactionContextProperties = TransactionResponseProperties & {
  createTransaction: (t: TransactionInput) => Promise<void>;
};

export const TransactionsContext = createContext<TransactionContextProperties>(
  {} as TransactionContextProperties
);

export const TransactionsProvider: React.FC = ({ children }) => {
  const [transactions, setTransactions] = useState<TransactionProperties[]>([]);

  const fetchTransactions = async () => {
    const response = await api.get<TransactionResponseProperties>(
      '/transactions'
    );

    setTransactions(response.data.transactions);
  };

  const createTransaction = async (transaction: TransactionInput) => {
    try {
      const response = await api.post<CreateTransactionResponseProperties>(
        '/transactions',
        transaction
      );
      console.log(response.data);
      setTransactions((old) => [...old, response.data.transaction]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <>
      <TransactionsContext.Provider value={{ transactions, createTransaction }}>
        {children}
      </TransactionsContext.Provider>
    </>
  );
};
