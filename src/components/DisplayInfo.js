import React from "react";

class DisplayInfo extends React.Component{
    //Xử dụng Props để lấy dữ liệu từ Component cha
    render(){

        //destructuring array/object
        const{name, age, myInfo} = this.props;
        return(
            <div>
                My name's {name} <br></br>
                My age's {age} <br></br>
                My info {myInfo}
            </div>
        );
    }
}

export default DisplayInfo;