var React = require('react');
var {Link} = require('react-router');
import {Button} from 'semantic-ui-react';
var NavBar = React.createClass({
  logoutCall() {
    $.ajax({
      url:"http://localhost:8080/users/logout",
      type: 'GET',
      // datatype: 'JSON',
      // data:{username :this.state.username,password:this.state.password},
      success: function(res)
      {
        if (typeof res.redirect == 'string')
        window.location.replace(window.location.protocol + "//" + window.location.host + res.redirect);
        console.log(res.responseText);
        // browserHistory.push('/');
      }.bind(this),
      error: function(err)
      {
        alert("error occurred while logging out");
        console.log(err.responseText);
      }.bind(this)
    });
  },
    render: function() {
        return (
            <div className="navigation">
                <h1>Foodies</h1>
                <ul className="nav">
                    <h1>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/Favourites">Favourites</Link>
                        </li>
                        <li>
                            <Button onClick={this.logoutCall.bind(this)} color='red'>Logout</Button>
                        </li>
                    </h1>
                </ul>
            </div>
        );
    }
});

module.exports = NavBar;
