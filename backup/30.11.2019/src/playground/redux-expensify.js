import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
import { SIGABRT } from 'constants';

// ADD_EXPENSE

const addExpense = ( 
    {
        description= '',
        note='',
        amount= 0,
        createdAt = 0
    }={}
    )=>({

    type:'ADD_EXPENSE',
    expenses:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
// REMOVE_EXPENSE

const removeExpanse = ({id} = {})=>({
    type:"REMOVE_EXPENSE",
    id
});
// EDIT_EXPENSE

const editExpanse = (id, update) =>({
    type:'EDIT_EXPENSE',
    id,
    update
});
// SET_TEXT_FILTER

const setTextFilter = (text = '')=>({
    type:'SET_TEXT_FILTER',
    text
});
// SORT_BY_DATE

const sortByDate = ()=>({
    type:'SORT_BY_DATE'
});
// SORT_BY_AMOUNT

const sortByAmount = ()=>({
    type:'SORT_BY_AMOUNT'
});
// SET_START_DATE
const setStartDate = (startDate)=>({
    type:'SET_START_DATE',
    startDate
});

// SET_END_DATE
const setEndDate = (endDate)=>{
    return ({
        type: 'SET_END_DATE',
        endDate
    });
};

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
        return [
            ...state,   //spread operator
            action.expenses
        ];
    case 'REMOVE_EXPENSE':
        return state.filter(( { id })=> id !== action.id);
    case 'EDIT_EXPENSE':
        return state.map((expense)=>{
            if(expense.id === action.id){
                return {
                    ...expense,
                    ...action.update
                };
            }else{
                return expense;
            }
        });
    default:
      return state;
  }
};

// Filters Reducer
// text => '', sortBy => 'date', startDate => undefined, endDate => undefined

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
        return {
            ...state,
            text:action.text
        };
    case 'SORT_BY_AMOUNT':
        return {
            ...state,
            sortBy:"amount"
        };
    case 'SORT_BY_DATE':
        return {
            ...state,
            sortBy:"date"
        };
    case 'SET_START_DATE':
        return {
            ...state,
            startDate: action.startDate
        }
    case 'SET_END_DATE':
        return {
            ...state,
            endDate: action.endDate
        }
    default:
      return state;
  }
};

const getVisibleExpenses = (expenses, {text, sortBy,startDate, endDate})=>{
    return expenses.filter((expense)=>{
        const startDateMatch =typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch =  typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b)=>{
        if(sortBy==='date'){
            return a.createdAt < b.createdAt ? 1:-1;
        }else if(sortBy==='amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

// Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);


store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expencesOne = store.dispatch(addExpense({description : 'Tea', amount:100, createdAt:-21000 }));
const expencesTwo = store.dispatch(addExpense({description : 'Coffe', amount:300, createdAt: -1000 }));

// store.dispatch(removeExpanse({id:expencesTwo.expenses.id}));
// store.dispatch(editExpanse(expencesOne.expenses.id, {amount: 150}));

// store.dispatch(setTextFilter('Coffe'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(999));
// store.dispatch(setEndDate());



const demoState = {
  expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
