import React from 'react'

import Fieldset from './Fieldset'
import List from './List'
import Test from './Test'

const App = React.createClass({
  render: function () {
    return (
    <div>
        <List/>
        <form>
          <legend>Form</legend>
          <Fieldset/>
        </form>
        <Test/>
      </div>
    )
  }
})

export default App
