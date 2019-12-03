

// JSX- JavaScript XML
console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};
const onFormSubmit = (e)=>{
    e.preventDefault();
    const option = e.target.elements.options.value;
    console.log("option::", option);
    if(option){
        app.options.push(option);
        e.target.elements.options.value = '';
        renderFunction();
    }
};
const removeAll = ()=>{
    app.options = [];
    renderFunction();
};

const onMakeDecision = ()=>{
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};
const reactload = document.getElementById("app");  

const renderFunction = ()=>{
    let count = 0;
    const template = (
        <div>
          <h1>{app.title}</h1>
          {app.subtitle && <p>{app.subtitle}</p>}
          <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
          <button onClick ={removeAll}>Remove All</button> &nbsp;&nbsp;&nbsp;
          <button disabled={app.options.length===0} onClick={onMakeDecision}>What should I do?</button>
          
          <form onSubmit={onFormSubmit}>
               <input type="text" name="options"></input>
               <button>Add</button>
           </form>
          <ol>
            {
                app.options.map((options)=> <li key={count++}>{options}</li>)
            }
          </ol>
           
        </div>
      );
    
    ReactDOM.render(template, reactload);
};

renderFunction();

