import React from "react";

class DisplayInfo extends React.Component{
    state = {
        isShowListUser: true
    }

    handleShowHide = () =>{
        this.setState({
            isShowListUser: !this.state.isShowListUser
        });
    }

    //Xử dụng Props để lấy dữ liệu từ Component cha
    render(){
        //destructuring array/object
        const {listUser} = this.props;
        // console.log(listUser);
        return(
            <div>
                <div>
                    <button onClick={() => {this.handleShowHide()}}>{this.state.isShowListUser ? "Hide List User" : "Show List User"}</button>
                </div>
                {
                    this.state.isShowListUser &&
                    <div>
                        {listUser.map((user) => {
                            return(
                                <div key={user.id} className={user.age > 18 ? "red" : "green"}>
                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age}</div>
                                    <hr></hr>
                                </div>
                            );
                        })}
                    </div>
                }
            </div>
        );
    }
}

export default DisplayInfo;