import uuid from 'uuid';

// ADD_EXPENSE

export const addExpense = ( 
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

export const removeExpanse = ({id} = {})=>({
    type:"REMOVE_EXPENSE",
    id
});
// EDIT_EXPENSE

export const editExpanse = (id, update) =>({
    type:'EDIT_EXPENSE',
    id,
    update
});