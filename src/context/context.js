import React, { useReducer, createContext } from 'react';
import PropTypes from 'prop-types';
import ContextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [
  {
    amount: 50,
    category: 'Travel',
    type: 'Expense',
    date: '2021-09-03',
    id: 'a8783e34-f63e-4883-b482-782270010830',
  },
  {
    amount: 1000,
    category: 'Savings',
    type: 'Income',
    date: '2021-09-07',
    id: 'bbfe5c73-21b8-46a1-8845-fcaf76322014',
  },
  {
    amount: 100,
    category: 'Salary',
    type: 'Income',
    date: '2021-09-07',
    id: '0fa8d18c-0aff-4f32-9787-56c485a957e4',
  },
];
export const OutlayTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(ContextReducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
  };

  const balance = transactions.reduce(function sum(acc, currValue) {
    let totalAmount;
    if (currValue.type === 'Expense') {
      totalAmount = acc - currValue.amount;
    } else {
      totalAmount = acc + currValue.amount;
    }
    return totalAmount;
  }, 0);
  return (
    <OutlayTrackerContext.Provider
      value={{ transactions, balance, deleteTransaction, addTransaction }}
    >
      {children}
    </OutlayTrackerContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};
