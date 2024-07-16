import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
    };
    console.log("Child Constructor")
  };

  componentDidMount(){
    console.log("Child Component Did Mount")
    //API calls
  };

  render() {
    const { name, location } = this.props;
    const { count } = this.state;

    console.log("Child Render")


    return (
      <div className="user-card">
        <h1>Count Class: {count}</h1>
        <button
          onClick={() => {
            // NEVER UPDATE STATE VARIABLE DIRECTLY
            this.setState({
             count: this.state.count + 1,
            })
          }}
        >Increase Count</button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: anishraj9797@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
