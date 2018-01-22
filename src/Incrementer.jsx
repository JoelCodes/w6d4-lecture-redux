import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementAction } from './reducers/increment';

function IncrementerPresenter(props) {
  return (<div>
    <button onClick={props.increment}>+</button> {props.count}
  </div>);
}

// DATA DOWN: take the count from the state and send it as props
const mapStateToProps = state => ({ count: state.count });

// ACTIONS UP: create an increment function that dispatches the increment action

const mapDispatchToProps = dispatch => ({
  increment: () => {
    dispatch(incrementAction);
  },
});
const IncrementerContainer = connect(mapStateToProps, mapDispatchToProps)(IncrementerPresenter);

// class IncrementerContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { // State
//       count: 0, // State
//     }; // State
//     this.increment = this.increment.bind(this); // State
//   }
//   increment() {
//     this.setState({ count: this.state.count + 1 }); // State
//   }
//   render() {
//     /* Presentation */
//     return (<IncrementerPresenter
//       count={this.state.count}
//       increment={this.increment}
//     />);
//   }
// }

export default IncrementerContainer;

// class Incrementer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { // State
//       count: 0, // State
//     }; // State
//     this.increment = this.increment.bind(this); // State
//   }
//   increment() {
//     this.setState({ count: this.state.count + 1 }); // State
//   }
//   render() {
//     /* Presentation */
//     return (<div>
//       <button onClick={this.increment}>+</button> {this.state.count}
//     </div>);
//   }
// }

// export default Incrementer;
