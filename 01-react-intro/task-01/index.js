const rootElement = document.querySelector('#root');

const greetElement = React.createElement('div', { className: 'greeting' }, 'Hello, React!');

ReactDom.render(greetElement, rootElement);
