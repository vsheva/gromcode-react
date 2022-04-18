//input:elem; output:elem


const rootElement = document.querySelector('#root');

const renderGreeting = rootElement => {

    const element = React.createElement(
        "div",
        {className: "greeting"},
        [
            React.createElement(
                "h1",
                {className: "greeting__title"},
                'Hello, world!'
            ),

            React.createElement(
                "p",
                {className: "greeting__text"},
                'I\'m learning React'
            )
        ]
    )
    //что отрисовать,   где
    ReactDOM.render(element, rootElement)
}

renderGreeting(rootElement);


// const renderGreeting = elem => {
//     const containerElem = document.createElement('div');
//     containerElem.classList.add('greeting');
//
//     const titleElem = document.createElement('h1');
//     titleElem.classList.add('greeting__title');
//     titleElem.textContent = 'Hello, world!';
//
//     const textElem = document.createElement('p');
//     textElem.classList.add('greeting__text');
//     textElem.textContent = "I'm learning React";
//
//     containerElem.append(titleElem, textElem);
//
//     elem.append(containerElem);
// };
//
// renderGreeting(rootElement);


// const rootElement = document.querySelector('#root');
//
// const greetElement = React.createElement(
//     'div',
//     {className: 'greeting'},
//     'Hello, React!'
// );
//
// ReactDOM.render(greetElement, rootElement);
