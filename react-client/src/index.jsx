import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import data from './dummy_data.js';
import Balance from './components/Balance.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allUsers: null
    }
  }

  componentDidMount() {
    $.ajax({
      url: 'api/users',
      method: 'GET',
      contentType: 'application/json',
      success: function(allUsers) {
        this.setState({allUsers: allUsers});
        console.log('HI????');
      },
      fail: function(err) {
        throw new Error('unable to find all users');
      }
    });
  }
  
  render () {
    return (
      <div>
        <Balance data={data}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
