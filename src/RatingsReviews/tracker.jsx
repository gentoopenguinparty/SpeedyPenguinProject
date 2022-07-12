import React from 'react'

class Tracker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    };
  }

  incCount = (className) => {
    this.setState({
    count: this.state.count + 1
  })
  console.log('clicked', this.state.count);
  console.log('className', className)
  }
  render () {
    return (
    <div>
      {this.props.render(this.state.count, this.incCount)}
    </div>
      );
  }
}

export default Tracker;