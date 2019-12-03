class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOptions =this.handleAddOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options :  props.options
        };
    }

    componentDidMount(){
        try{
            console.log('onload s');
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options)
            this.setState(()=>({ options }));
        }catch(e){
            //Do nothing at all
        }
        
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length != this.state.options.length){
            console.log('Update and save the data');
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
        
    }

    componentWillUnmount(){
        console.log('removes the component');
    }
    handleDeleteOptions() {
        this.setState(()=>({ options:[] }));
    }

    handleDeleteOption(optionToRemove){
        this.setState((PrevState)=>({
            options:PrevState.options.filter((option)=>{
                return optionToRemove !== option;
            })
        }));
    }
    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOptions(option){
        if(!option){
            return 'Enter a valid value';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This Option already exixt';
        }
        this.setState((prevState)=>({ options : prevState.options.concat([option]) }));
    }

    render(){
        const subTitle = "Put your life in computer";
        return (
            <div>
                <Header  subTitle = {subTitle}/>
                <Action 
                    hasOptions = {this.state.options.length > 0}
                    handlePick ={this.handlePick}
                />
                <Options 
                    option={this.state.options} 
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption handleAddOptions = {this.handleAddOptions}/>
            </div>   
        );
    }
}

IndecisionApp.defaultProps={
    options:[]
}

const Header =(props)=> {
        return (
            <div>
                <h1>{props.title}</h1>
                {props.subTitle && <h2>{props.subTitle}</h2>}
            </div>
        );
}
Header.defaultProps = {
    title: 'Indecision App'
}

const Action =(props)=> {
    return (
        <button 
            onClick= {props.handlePick}
            disabled = {!props.hasOptions}
            >
            What should I do?
        </button>
    );
}

const Options =(props)=>{    
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.option.length === 0 && <p>Please enter some options to get started</p>}
            {
                props.option.map((option)=>(
                    <Option 
                        key={option} 
                        optionText = {option}
                        handleDeleteOption = {props.handleDeleteOption}    
                    />
                ))
            }
        </div>
    );
}

const Option =(props)=>{
    return (
        <div>
            {props.optionText}
            <button 
                onClick= {(e)=>{
                    props.handleDeleteOption(props.optionText)
                }}
            >
                remove
            </button>
        </div>
    );
}

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e){
        e.preventDefault();
        const value = e.target.elements.option.value.trim();
        const error = this.props.handleAddOptions(value);
        this.setState(()=>({error}));      
        if(!error){
            e.target.elements.option.value = '';
        }
            
    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit= {this.handleAddOption}>
                    <input type= "text" name="option" placeholder="Enter your text here" /><button >AddOption</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));