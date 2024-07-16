import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>About</h1>
        <h2>This is About Section of this application</h2>
        {/* <User name={"Anish (functional)"}/> */}
        <UserClass name={"Anish (Class)"} location={"Bhubaneswar class"} />
        <UserClass name={"Elon Musk (Class)"} location={"US"} />
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

/*
Life Cycle Flow of React Class Based Components
(Parent or Child does not matter Flow Will always like this only)
- Parent Constructor ----------|
- Parent Render                |
  - Anish Constrctor(child)    | 
  - Anish Render(child)        |  Phase - 1 Render Phase (Which happens Very fast, React followwing this way because this is optimized way and happens quickly.)
                               |                        - React Components are nothing but javascript object and javascript is very fast so this phase happends quickly.
  - Elon Constrctor(child)     |
  - Elon Render (child) -------|
  

  <DOM Updated - In single batch>------|
  - Anish Component Did Mount (child)  |
  - Elon Component Did Mount (child)   |  Phase - 2 Commit Phase (This phase is not fast as render phase) So react batchs each phases.
                                       |           - React uses these two phases for best optimization way.
- Parent Component Did Mount ----------|     
*/                          

export default About;
