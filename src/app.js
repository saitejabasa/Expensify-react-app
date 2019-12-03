import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize-css/normalize.css';
import './styles/styles.scss';

const store = configureStore(); 


store.dispatch(addExpense({ description: 'Gas bill' , amount:'50'}));
store.dispatch(addExpense({ description: 'Water bill' , createdAt:'2100'}));
store.dispatch(addExpense({ description: 'Rent' , amount:'308100'}));
store.dispatch(addExpense({ description: 'House' , amount:'20000',createdAt:'100'}));


const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log("visibleExpenses::", visibleExpenses);

const jsx = (

    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
