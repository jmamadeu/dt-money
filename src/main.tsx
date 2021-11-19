import { createServer, Model } from 'miragejs';
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { TransactionsProvider } from './contexts/transactions';

createServer({
  models: {
    transaction: Model
  },
  seeds: (server) => {
    server.db.loadData({
      transactions: []
    });
  },
  routes() {
    (this.namespace = 'api'),
      this.get('/transactions', () => {
        return this.schema.all('transaction');
      });
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', { ...data, createdAt: new Date() });
    });
  }
});

render(
  <React.StrictMode>
    <TransactionsProvider>
      <App />
    </TransactionsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
