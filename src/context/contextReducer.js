const contextReducer = (state, action) => {
  let transactions;
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      transactions = state.filter((t) => t.id !== action.payload);
      break;
    case 'ADD_TRANSACTION':
      transactions = [action.payload, ...state];
      break;
    default:
      transactions = state;
      break;
  }
  localStorage.setItem('transactions', JSON.stringify(transactions));
  return transactions;
};

export default contextReducer;
