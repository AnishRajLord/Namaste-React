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



# Life Cycle Flow of React Class Based Components
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
     

- Mounting
Constructor (dummy)
Render (dummy)
  <HTML dummy>

  Componenr Did Mount
   <API calls>
   <this.setState>  --> State Varibale is Updated

- UPDATE


render(API calls)
<HTML (new Api data)>
Component Did Update