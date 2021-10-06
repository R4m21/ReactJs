import React, { Component } from 'react'

// in render method to defind clickHandler
// class ClassClick extends Component {
//     render() {
//         function clickHandler() {
//             console.log('Button Click');
//         }
//         return (
//             <div>
//             <button onClick={clickHandler}>Click</button>
//             </div>
//         )
//     }
// }

// outside render method defind function
class ClassClick extends Component {
    clickHandler(){
        console.log('Button Click');
    }
    render() {
        return (
            <div>
            <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default ClassClick
