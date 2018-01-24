import React from 'react';

import Friend from '../components/Friend.jsx';

class Transfer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      friends: this.props.friends
    }
  }


  render () {

    let rows = [];
    this.props.friends.forEach((friend, index) => {
      rows.push(<Friend friend={friend} key={index} updateBalance={this.props.updateBalance}/>);
    });

    return (
      <div>
        <h4> Transfer Money to:</h4>
        {rows}
      </div>
    );
  }

}

export default Transfer;
