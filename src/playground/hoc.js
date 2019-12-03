import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props)=>(
    <div>
        <h1>
            Info
        </h1>
        <p>Details:{props.info} </p>
    </div>
);

const requireAuthientation = (WrapedComponent)=>{
    return (props)=>(
        <div>
        {props.isAuth ? (<WrapedComponent {...props}/> ):(<p>Please login to view the info</p>)}
        
    </div>
    );
};
const Authinfo = requireAuthientation(Info)
ReactDOM.render(<Authinfo isAuth= {false} info='This are the info details'/>, document.getElementById('app'));