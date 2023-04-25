import React from "react";
import './DisplayInfo.scss';
import logo from '../logo.svg';

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
            <div className="display-info-container">
                <img src={logo}></img>
                <div>
                    <button onClick={() => {this.handleShowHide()}}>{this.state.isShowListUser ? "Hide List User" : "Show List User"}</button>
                </div>
                {
                    this.state.isShowListUser &&
                    //Fragment
                    <>
                        {listUser.map((user) => {
                            console.log(user);
                            return(
                                <div key={user.id} className={user.age > 18 ? "red" : "green"}>
                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age}</div>
                                    <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
                                    <hr></hr>
                                </div>
                            );
                        })}
                    </>
                }
            </div>
        );
    }
}

export default DisplayInfo;