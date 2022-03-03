import React, { Component } from 'react'

export class GrandChild extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }

  clickHandler = () => {
    this.setState(
      (state) => {
        return { count: state.count + 1 }
      },
      () => {
        this.props.getCount(this.state.count)
      },
    )
  }
  render() {
    return (
      <div style={{ border: '3px solid green', padding: '20px' }}>
        <h1>I am Grandchild Component</h1>
        <p>{this.props.name}</p>
        <h5>Count: {this.state.count}</h5>
        <button className="btn btn-primary" onClick={this.clickHandler}>
          Update Count
        </button>
      </div>
    )
  }
}

export default GrandChild
