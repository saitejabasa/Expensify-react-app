import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItems from './ExpenseListItems';
import selectExpenses from '../selectors/expenses';

const ExpenseList =(props)=>(
    <div>
        {props.expenses? <h1>Expense list</h1> :  <p>No expenses</p> }
        
        {props.expenses.map((expenses)=>{
            return <ExpenseListItems key ={expenses.id} {...expenses}/>
        })}
    </div>
);

const mapStateToProps = (state)=>{
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
};

export default  connect(mapStateToProps)(ExpenseList);

// export default ConnectExpanseList;