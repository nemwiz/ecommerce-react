import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from "./header/Header";
import Orders from "./orders/Orders";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Route exact path="/" component={Orders}/>
                    <Route exact path="/orders" component={Orders}/>
                </div>
            </Router>
        );
    }
}

export default App;
