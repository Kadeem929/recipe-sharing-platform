const React = require('react');
const { createRoot } = require('react-dom/client');
const App = require('./src/App').default;

// ReactDOM.render(<App />, document.getElementById('root'));

const Index = () => {
    return (<App />);
}

createRoot(document.querySelector('#root')).render(<Index />); 