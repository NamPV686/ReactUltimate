//Class Component
//Function Component

import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
    state = {
        listUser :[
            {id: 1, name: "Nam", age: 16},
            {id: 2, name: "Hoàng", age: 25},
            {id: 3, name: "Cường", age: 17}
        ]
    }

    handleAddNewUser = (userInfo) => {
        console.log(userInfo);
        this.setState({
            listUser: [userInfo, ...this.state.listUser]
        });
    }
    //JSX
    render(){
        return (
            //Fragment
            <>
                <AddUserInfo  handleAddNewUser={this.handleAddNewUser}></AddUserInfo>
                <DisplayInfo listUser = {this.state.listUser}></DisplayInfo>
            </>
        );
    }
}

export default MyComponent;