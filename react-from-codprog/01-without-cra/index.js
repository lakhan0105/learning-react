const rootEl = document.getElementById("root");

// creating an element and store in a variable
// const el = React.createElement("h1", null, "Hello World");

// creating an element in a function
// function HelloWorld() {
//   return React.createElement("h1", null, "Hello Lakhan");
// }

function HelloWorld() {
  return <h1>Hello World</h1>;
}

// Injecting the el into the root el
ReactDOM.createRoot(rootEl).render(<HelloWorld></HelloWorld>);
