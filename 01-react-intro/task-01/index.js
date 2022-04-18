const rootElem = document.querySelector("#root");

const elem = React.createElement(
    "div",
    {className: "greeting"},
    "Hello, Valera! I'm from React!"
)

ReactDOM.render(elem, rootElem)






















// const rootElement = document.querySelector('#root');
//
// const greetElement = React.createElement(
//     'div',
//     {className: 'greeting'},
//     'Hello, React!'
// );
//
// ReactDOM.render(greetElement, rootElement);
