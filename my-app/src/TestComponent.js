import React from 'react'

class TestComponent extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props); // prints undefined

    // but props parameter is still available
    console.log(props); // prints { name: 'John', age: 42 }
  }

  render() {
    // no difference outside constructor
    console.log(this.props); // prints { name: 'John', age: 42 }
    return(
        <div>
            <h1>hello</h1>
        </div>
    )
  }
}
export default TestComponent