import React from 'react'
import Navigation from './Navigation'
import store from '../store'

const Counter = ({value, onIncrement, onDecrement}) => (
<div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
)

const App = React.createClass({
  increment: function () {
    store.dispatch({ type: 'INCREMENT' })
  },

  decement: function () {
    store.dispatch({ type: 'DECREMENT' })
  },

  render: function () {
    return (
    <div>
        <Navigation />
        <Counter value={store.getState()} onIncrement={this.increment} onDecrement={this.decement}/>
      </div>
    )
  }
})

export default App
