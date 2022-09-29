import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parentName: 'Robin Hood'
        }
    }

    greetParent = name => {
        alert(`Hello ${this.state.parentName} from ${name}`)
    }

    render() {
        return (
            <ChildComponent greetHandler={this.greetParent} />
        )
    }
}

export default ParentComponent