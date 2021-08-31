import { useContext } from 'react';
import { OutlayTrackerContext } from '../context/context';
import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from '../constants/categories';

const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(OutlayTrackerContext);
  const transactionsPerType = transactions.filter((t) => t.type === title);
  const total = transactionsPerType.reduce(function sum(acc, currValue) {
    const totalAmount = acc + currValue.amount;
    return totalAmount;
  }, 0);
  const categories = title === 'Income' ? incomeCategories : expenseCategories;
  transactionsPerType.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);
    if (category) {
      category.amount += t.amount;
    }
  });
  const filterCategories = categories.filter((c) => c.amount > 0);

  const chartData = {
    datasets: [
      {
        data: filterCategories.map((c) => c.amount),
        backgroundColor: filterCategories.map((c) => c.color),
      },
    ],
    labels: filterCategories.map((c) => c.type),
  };
  return { total, filterCategories, chartData };
};

export default useTransactions;
