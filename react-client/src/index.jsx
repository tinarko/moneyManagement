import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Balance from './components/Balance.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allUsers: null
    }
  }

  componentDidMount() {
    var context = this;
    $.ajax({
      url: 'api/users',
      method: 'GET',
      contentType: 'application/json',
      success: function(allUsers) {
        console.log(allUsers);
        context.setState({allUsers: allUsers});
      },
      fail: function(err) {
        throw new Error('unable to find all users');
      }
    });
  }
  
  render () {
    return (
      <div>
        <Balance allUsers={allUsers}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
