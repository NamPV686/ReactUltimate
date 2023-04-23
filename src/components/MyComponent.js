//Class Component
//Function Component

import React from "react";

class MyComponent extends React.Component {

    state = {
        name: "Phi Nam",
        age: 24
    };

    //JSX
    render(){
        return (
            <div>
                My name is {this.state.name} and {this.state.age} years old
            </div>
        );
    }
}

export default MyComponent;