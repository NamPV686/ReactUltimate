//Class Component
//Function Component

import React from "react";
import UserInfo from "./UserInfo";

class MyComponent extends React.Component {

    //JSX
    render(){
        return (
            <div>
                <UserInfo></UserInfo>
            </div>
        );
    }
}

export default MyComponent;