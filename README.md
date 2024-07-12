//This is using createElement(core method). This is not recommended because it is messy and not developer friendly.
// const heading = React.createElement("h1", {id: "heading"}, "React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)

//This is using JSX(React Element)
//const heading = <h1 id="heading">React using JSX.</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//React Functional Component
// const Title = () => {
//   return <h1 className="head">Namaste React</h1>;
// };

// const HeadingComponent = () => {
//   return (
//     <div>
//       {heading}
//       <h1>React Functional Component</h1>
//       {/* Component Composition (component inside a component) */}
//       <Title />
//       <Title></Title>
//       {Title()}
//     </div>
//   );s
// };

Two types of export and import

- Default Export/Import
  export default Component
  import component from "path"

- Named Export/Import
  export const Component
  import {Component} from "path"

  # React Hooks
  (Normal JS utility functions)
  - Two very important hooks and most used also
  - useState() - Super Powerful State Varibales in react
  - useEffect()


# 2 types of routing in web apps
- client side routing
- server side routing