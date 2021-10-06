import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName : 'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        // alert('Hello ' + this.state.parentName)'
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    // greetParent = () => {
    //     alert(`Hello ${this.state.parentName}`)
    // }

    render() {
        return (
            // <div>
            // <button onClick={this.greetParent.bind(this)}>alert {this.state.parentName}</button>
            // <button onClick={() => this.greetParent()}>alert {this.state.parentName}</button>
            // <button onClick={this.greetParent}>alert {this.state.parentName}</button>
            // </div>

            <div>
            {/* parent pass method by attribute */}
                <ChildComponent greetHandler = {this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
