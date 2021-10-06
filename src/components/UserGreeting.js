import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    // return (
    //   <>
    //     <div>Welcome Maniram</div> // OR
    //     <div>Welcome Guest</div>
    //   </>
    // );

    // 1. approch if else condition
    //   if(this.state.isLoggedIn){
    //       return <div>Welcome Maniram</div>
    //   }else{
    //       return <div>Welcome Guest</div>
    //   }

    // 2. approch with element variable
    // let user;
    // if (this.state.isLoggedIn) {
    //   user = "Maniram";
    // } else {
    //   user = "Guest";
    // }
    // return <div>Welcome {user}</div>;

    // 3. approch Ternary conditional operator
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Maniram</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    // 4. approch Short circuit operator
    return this.state.isLoggedIn && <div>Welcome Maniram</div>;
  }
}

export default UserGreeting;
