import React, { useReducer, createContext } from 'react';
import PropTypes from 'prop-types';
import ContextReducer from './contextReducer';

const initialState = [];
export const OutlayTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(ContextReducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
  };

  return (
    <OutlayTrackerContext.Provider
      value={{ transactions, deleteTransaction, addTransaction }}
    >
      {children}
    </OutlayTrackerContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};
