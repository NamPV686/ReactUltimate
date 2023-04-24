import React from "react";

class DisplayInfo extends React.Component{
    //Xử dụng Props để lấy dữ liệu từ Component cha
    render(){

        //destructuring array/object
        const {listUser} = this.props;
        return(
            <div>
                {listUser.map((user) => {
                    return(
                        <div key={user.id}>
                            <div>My name's {user.name}</div>
                            <div>My age's {user.age}</div>
                            <hr></hr>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default DisplayInfo;