import React, {Component} from 'react';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            counter: 0,
            fixed:1
        };
    }

    handleIncrease=()=> {
        this.setState(state =>({
            counter: this.state.counter +1
        }));
    }

    handleDecrease=()=> {
        this.setState(state =>({
            counter: this.state.counter -1
        }))
    }

    render(){
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease} >+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <p>고정된 값: {this.state.fixed}</p>
            </div>
        );
    }
}

export default Counter;