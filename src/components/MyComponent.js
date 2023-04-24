//Class Component
//Function Component

import React from "react";

class MyComponent extends React.Component {

    state = {
        name: "Phi Nam",
        age: 24
    };
    handleClick(event){
        console.log(this.state.name);
        this.setState(
            {
                name: "Hoàng" + Math.floor(Math.random() * 100),
                age: Math.floor(Math.random() * 100)
            }
        );
    }

    handleOnMoverOver(event){
        console.log(event);
    }

    handleOnchange = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    handleOnSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state);
    }

    //JSX
    render(){
        return (
            <div>
                My name is {this.state.name} and {this.state.age} years old
                <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => {this.handleOnchange(event)}}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;