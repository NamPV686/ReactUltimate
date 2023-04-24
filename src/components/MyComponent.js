//Class Component
//Function Component

import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
    state = {
        listUser :[
            {id: 1, name: "Nam", age: 26},
            {id: 2, name: "Hoàng", age: 25},
            {id: 3, name: "Cường", age: 28}
        ]
    }
    //JSX
    render(){
        const myInfo = [1,2,2,4]
        return (
            <div>
                <UserInfo></UserInfo>
                <DisplayInfo listUser = {this.state.listUser}></DisplayInfo>
            </div>
        );
    }
}

export default MyComponent;