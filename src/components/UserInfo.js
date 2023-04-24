import React from "react";

class UserInfo extends React.Component{
    state = {
        name: "Phi Nam",
        age: 24
    };

    handleOnchangeName = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    handleOnchangeAge = (event) => {
        this.setState({
            age: event.target.value
        });
    }

    handleOnSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <div>
                My name is {this.state.name} and {this.state.age} years old
                <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
                <label>Name: </label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => {this.handleOnchangeName(event)}}
                    />
                    <label>Age: </label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => {this.handleOnchangeAge(event)}}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default UserInfo;