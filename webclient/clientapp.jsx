const React = require('react');
const ReactDOM = require('react-dom');
const {browserHistory, Route, Router, IndexRoute} = require('react-router');
const Favourite = require('./components/restaurant/favourites');
const NavBar = require('./components/NavBar');
const Home = require('./components/search.jsx');
const login = require('./components/login.jsx');

let MainComp = React.createClass({
    render: function() {
        return (
            <div>
                <NavBar/>
                <br/><br/><br/><br/> {this.props.children}
            </div>
        );
    }
})
ReactDOM.render(
   <Router history={browserHistory}>
     <Route path='/' component={login}/>
     <Route component={MainComp}>
         <Route path='/home' component={Home}/>
         <Route path="/favourites" component={Favourite}/>

     </Route>
     <Route path="/logout" component={login}/>
   </Router>, document.getElementById('mountapp'));
