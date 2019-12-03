import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize-css/normalize.css'; 
import './styles/style.scss';  


const store = configureStore();
store.dispatch(addExpense({ description:'tea' }));
store.dispatch(addExpense({ description:'coffee' }));
store.dispatch(setTextFilter('water'));

const state = store.getState();
console.log("state::", state);
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById('app'));
