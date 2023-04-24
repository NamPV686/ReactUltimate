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

    //JSX
    render(){
        return (
            <div>
                My name is {this.state.name} and {this.state.age} years old
                <button onMouseOver={this.handleOnMoverOver}>Hover</button>
                <button onClick={(event) => {this.handleClick(event)}}>Click me</button>
            </div>
        );
    }
}

export default MyComponent;