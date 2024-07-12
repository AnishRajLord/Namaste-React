import User from "./User";

import UserClass from "./UserClass";

const About = () => {
    return(
        <div>
            <h1>About</h1>
            <h2>This is About Section of this application</h2>
            <User name={"Anish (functional)"}/>
            <UserClass name={"Anish (Class)"}/>
        </div>
    );
};

export default About;