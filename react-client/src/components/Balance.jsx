import React from 'react';
import _ from 'lodash';

import Transfer from '../components/Transfer.jsx';

class Balance extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: null,
      foundUser: false,
      balance: 0,
      friends: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateBalance = this.updateBalance.bind(this);
  }

  handleChange(event) {
    let name = event.target.value;
    this.setState({name: _.upperFirst(name)});
  }

  handleSubmit(event) {
    this.setState({foundUser: true});
    let name = this.state.name;
    let friends = this.state.friends;
    this.props.data.forEach(user => {
      if (user.name.toLowerCase() === name.toLowerCase()) {
        this.setState({balance: user.balance});
      } else {
        friends.push(user);
      }
    });
    this.setState({friends: friends});
  }

  updateBalance(diff) {
    this.setState({balance: Number(this.state.balance) - Number(diff)});
  }

  render () {
    if (!this.state.foundUser) {

      return (
        <div>
          <form>
            <input type="text" onChange={this.handleChange}></input>
            <button type="button" onClick={this.handleSubmit}>Get Balance</button>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <h4> Welcome, {this.state.name}!</h4>
          <h4> Your balance is ${this.state.balance}.</h4>
          <Transfer friends={this.state.friends} updateBalance={this.updateBalance}/>
        </div>
      );
    }
  }

}

export default Balance;