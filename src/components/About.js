import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent Component Did Mount");
  }

  render() {
    //console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <div>
          {/* This is way how you can access the context in class base component which takes a callback functuiion */}
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>Logged In user: {loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h2>This is About Section of this application</h2>
        {/* <User name={"Anish (functional)"}/> */}
        <UserClass name={"Anish (Class)"} location={"Bhubaneswar class"} />
      </div>
    );
  }
}

// const About = () => {
//     return(
//         <div>
//             <h1>About</h1>
//             <h2>This is About Section of this application</h2>
//             {/* <User name={"Anish (functional)"}/> */}
//             <UserClass name={"Anish (Class)"} location={"Bhubaneswar class"}/>
//         </div>
//     );
// };

export default About;
