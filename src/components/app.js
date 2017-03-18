import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import update from 'immutability-helper';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {array : this.props.array}
  }

  removebox(index){
    const newArray = update(this.state.array, {$splice: [[index,1]]});
    this.setState({array: newArray})
    console.log(this.state.array)
  }
  addbox(){
    const newArray = update(this.state.array, {$push: [Math.floor(Math.random() * (10000 - 5)) + 5]})
    this.setState({array: newArray})
  }

  render() {
    return (
      <div>
      <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
      {this.state.array.map((item, i)=>(<div key={item} className="todo-item" onClick = {this.removebox.bind(this, i)}></div>))}
      </ReactCSSTransitionGroup>
      <button onClick={this.addbox.bind(this)}>ADD</button>
      </div>
    );
  }
}
