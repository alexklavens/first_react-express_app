//main.js
import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import Home from "./home";
import Graph1 from "./graph1";
import Graph2 from "./graph2";

class Main extends Component {
    state = {users: []}
    componentDidMount(){
        fetch("/users")
            .then(res => {
                console.log(res);
                return res.json()
             })
             .then(users => {
                console.log(users);
                this.setState({ users })
             });
    }




    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Let's Talk About Solar</h1>
                    <h3>Alex Klavens</h3>
                    <ul className='header'>
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/graph1">Chart 1</NavLink></li>
                        <li><NavLink to="/graph2">Chart 2</NavLink></li>
                    </ul>

                    <div className="App">
                  </div>

                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/graph1" component={Graph1}/>
                        <Route path="/graph2" component={Graph2}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}
export default Main;
