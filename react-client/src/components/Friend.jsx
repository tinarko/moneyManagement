import React from 'react';

class Friend extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      transferAmount: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick() {
    this.setState({clicked: true});
  }

  handleChange(event) {
    this.setState({
      transferAmount: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({clicked: false});
    this.props.updateBalance(this.state.transferAmount);
  }

  render () {
    if (!this.state.clicked) {
      return (
        <div>
          <li onClick={this.handleClick}>{this.props.friend.name}</li>
        </div>
      );
    } else {
      return (
         <div>
          <li onClick={this.handleClick}>{this.props.friend.name}
            <form>Transfer:
              <input type="text" onChange={this.handleChange}></input>
              <button onClick={this.handleSubmit}>✓</button>
            </form>
          </li>
        </div>
      );
    }
  }

}

export default Friend;