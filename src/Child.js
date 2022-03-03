import React, { Component } from 'react'
import GrandChild from './grandChild'

class Child extends Component {
  render() {
    return (
      <div style={{ border: '3px solid blue', padding: '20px' }}>
        <h1>I am Child Component </h1>
        <p>{this.props.name}</p>
        <h2>Hi!! there{this.props.getCount}</h2>

        <GrandChild
          name={
            this.props.name +
            ' ==> I am props passed in Grandchild tag in Child component'
          }
          getCount={this.props.getCount}
        />
      </div>
    )
  }
}

export default Child
