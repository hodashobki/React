import React, { Component} from 'react';

class NewComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    increase=()=>{
        this.setState({ age:this.state.age+1 });
    }
render(){
    return(
        <div>
            <h1> { this.props.firstName }, { this.props.lastName }</h1>
            <p>Age {this.state.age}</p>
            <p>Hair Color: {this.props.hair}</p>
            <button onClick={ this.increase }>Birthday of { this.props.lastName } { this.props.firstName }  </button>
            <hr></hr>
        </div>
    )
}
}
export default  NewComponent;