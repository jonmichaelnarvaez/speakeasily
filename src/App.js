import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Welcome to Speak Easily App
                </p>
                <a
                    className="App-link"
                    href="https://getmegiddy.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    developed by Giddy Holdings, Inc.
                </a>
            </header>
        </div>
    );
}

export default App;
