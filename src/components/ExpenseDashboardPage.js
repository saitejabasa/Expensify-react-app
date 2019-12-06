import React from 'react';
import ExpanseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilter';
import ExpanseSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
  <div>
    <ExpanseSummary />
    <ExpenseListFilters />
    <ExpanseList />
  </div>
);

export default ExpenseDashboardPage;
