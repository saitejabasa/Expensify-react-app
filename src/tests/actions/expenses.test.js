import { addExpense,removeExpense,editExpense } from '../../actions/expenses';

test('Testing the remove expense', ()=>{
    const action = removeExpense({id:"123abc"});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    });
});

