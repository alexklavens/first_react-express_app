//graph2.js
import React, { Component } from "react";

function monthString(num){
    var months = ['January', 'February', 'March',
                    'April', 'May', 'June',
                    'July', 'August', 'September',
                    'October', 'November', 'December'];
    return months[num-1];
}

function circCenter(i){
    return 200*(i+1)-100;
}

class Graph2 extends Component {
    state = {users: []}
    componentDidMount(){
        fetch("/users")
            .then(res => {
                return res.json()
             })
             .then(users => {
                this.setState({ users })
             });
    }

  render() {
    return (


      <div>
        <h2>Cents Per Kilowatt Hour</h2>
        <svg width="1000" height="250">
            {this.state.users.slice(0).reverse().map((user,i) =>
                <g>
                    <circle class='kwhCirc' cx={circCenter(i)} cy='100' r={Math.pow(user.bill/user.kwh*100,1.7)}></circle>
                    <text class='kwhText' x={circCenter(i)-25} y='110'> {Math.round((user.bill/user.kwh)*100) + "¢"} </text>
                    <text className="kwhMonth" x={circCenter(i)-45} y='220'> {monthString(user.month) + " " + user.year}</text>

                </g>

            )}


        </svg>
      </div>
    );
  }
}

export default Graph2;
