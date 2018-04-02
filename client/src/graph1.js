//graph1.js
import React, {Component} from "react";


function monthString(num){
    var months = ['January', 'February', 'March',
                    'April', 'May', 'June',
                    'July', 'August', 'September',
                    'October', 'November', 'December'];
    return months[num-1];
}
class Graph1 extends Component {
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

    render(){
        const barH = 30;
        var between = 83;
        return(
            <div>
                <h2>Utility Costs, Savings, and Kilowatt Hours</h2>
                <svg width="700" height="400">
                    {this.state.users.slice(0).reverse().map((user,i) =>
                        <g>
                            <text className="monthYear" x={user.kwh/3 + 15} y = {33+i*between+(barH/2)} dy='.35em'> {monthString(user.month) + " " + user.year}</text>

                            <rect className='bill' x='2' y={i*between} width={user.bill*3} height={barH}></rect>
                              <text className='textResult' x='5' y={i*between+(barH/2)} dy='.35em'>
                                  {'Bill: $' + user.bill + "  ----   Savings: $" + user.savings}
                              </text>
                            <rect className='savings' x={2+user.bill*3} y={i*between} width={user.savings*3} height={barH}/>
                            <rect className='kwh' x='2' y={33+i*between} width={user.kwh/3} height={barH}></rect>
                            <text className='textResult' x='5' y={33+i*between+(barH/2)} dy='.35em'>{user.kwh + ' kwh'}</text>
                        </g>
                )}
                </svg>
            </div>

        );
    }


}

export default Graph1;
