import React, { Component } from 'react'
import Child from './Child'

class App extends Component {
  constructor() {
    super()
    this.state = {
      value: 'Hello!',
      color: 'red',
      count: 0,
    }
    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler(event) {
    this.setState({
      count: this.state.count + 1,
      value: event.target.value,
      color: event.target.value.length > 6 ? 'green' : 'pink',
    })
    console.log(this.state)
  }

  getCount = (value) => {
    this.setState({ count: value })
  }

  render() {
    return (
      <div
        className="mt-4"
        style={{ border: '3px solid red', padding: '20px' }}
      >
        <h1>I am App Component</h1>
        <input
          type="text"
          value={this.state.value}
          style={{ backgroundColor: this.state.color }}
          onChange={this.changeHandler}
        />
        <h4>App Count: {this.state.count}</h4>
        <Child
          name={
            this.state.value +
            ' I am props passed in Child tag in App Component'
          }
          getCount={this.getCount}
        />
      </div>
    )
  }
}

export default App
