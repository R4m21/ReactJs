import React,{ Component } from "react";

// learn props in class component.
// class Welcome extends Component{
//     render(){
//         // this.props.name = "chauhan"; //TypeError: Cannot assign to read only property 'name' of object '#<Object>'
//         return (
//             <>
//              {/* parent to child props */}
//             <h1>Welcome {this.props.name + this.props.idNum}</h1>
//             <h1>Welcome {this.props.name} {this.props.idNum}</h1>

//             {/* child to parent props (dynamic containt)*/}
//             {this.props.children}
//             </>
//         )
//     }
// }

// Destructuring props and state in render method
// Destructuring props in render method
class Welcome extends Component{
    render(){
        const {name,idNum}=this.props;
        // const {state1,state2} = this.state;//for state destructuring
        return (
            <>
             {/* parent to child props */}
            <h1>Welcome {name + idNum} {name} {idNum}</h1>
            </>
        )
    }
}

export default Welcome;