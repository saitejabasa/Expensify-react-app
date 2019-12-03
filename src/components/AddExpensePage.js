import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpanseForm';
import { addExpense } from '../actions/expenses';


const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm 
      onSubmit = {(expenses)=>{
        props.dispatch(addExpense(expenses));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddExpensePage);
