import React, { Component } from 'react'

class LifecycleD extends Component {
    constructor(props) {
        super(props)

        this.state = {
             name: 'maniram'
        }

        console.log(`LifecycleD Constuctor`);//
    }

    static getDerivedStateFromProps(props,state){
        console.log(`LifecycleD getDerivedStaeFromProps`);//
        return null
    }

    componentDidMount(){
        console.log(`LifecycleD componentDidMount`);//
    }

    shouldComponentUpdate(){
        console.log(`LifecycleD shouldComponentUpdate`);//
        return true
    }

    componentDidUpdate(){
        console.log(`LifecycleD componentDidUpdate`);//
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log(`LifecycleD getSnapshotBeforeUpdate`);//
        return null
    }

    render() {
        console.log(`LifecycleD render`);//
        return (<>
            <div>
            Lifecycle D
            </div>
            </>
        )
    }
}

export default LifecycleD
