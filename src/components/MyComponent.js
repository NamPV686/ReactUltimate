//Class Component
//Function Component

import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
    //JSX
    render(){
        const myInfo = [1,2,2,4]
        return (
            <div>
                <UserInfo></UserInfo>
                <DisplayInfo name={"Nam"} age={24} myInfo = {myInfo}></DisplayInfo>
            </div>
        );
    }
}

export default MyComponent;