import React from 'react';
import ExpanseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilter';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpanseList />
  </div>
);

export default ExpenseDashboardPage;
