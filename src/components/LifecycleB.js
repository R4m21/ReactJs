import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
             name: 'maniram'
        }

        console.log(`LifecycleB Constuctor`);
    }

    static getDerivedStateFromProps(props,state){
        console.log(`LifecycleB getDerivedStaeFromProps`);
        return null
    }

    componentDidMount(){
        console.log(`LifecycleB componentDidMount`);
    }

    render() {
        console.log(`LifecycleB render`);
        return (
            <div>
            Lifecycle B
            </div>
        )
    }
}

export default LifecycleB
