const add = (a, b)=> a+b;

test('should add two values', ()=>{
    const result = add(2,4);
    expect(result).toBe(6);
});