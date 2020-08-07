import React from 'react';
import './App.scss';
import Button from './components/Button';

function App() {
    return (
        <div className="App">
            <div className="buttons">
                <Button size="large" onClick={() => console.log('클릭!')}>
                    Button
                </Button>
                <Button>BUTTON</Button>
                <Button size="small">Button</Button>
            </div>
            <div className="buttons">
                <Button size="large" color="gray">
                    Button
                </Button>
                <Button color="gray">BUTTON</Button>
                <Button size="small" color="gray">
                    Button
                </Button>
            </div>
            <div className="buttons">
                <Button size="large" color="pink">
                    Button
                </Button>
                <Button color="pink">BUTTON</Button>
                <Button size="small" color="pink">
                    Button
                </Button>
            </div>
            <div className="buttons">
                <Button size="large" color="blue" outline>
                    Button
                </Button>
                <Button color="gray" outline>
                    BUTTON
                </Button>
                <Button size="small" color="pink" outline>
                    Button
                </Button>
            </div>
            <div className="buttons">
                <Button size="large" color="blue" fullWidth>
                    Button
                </Button>
                <Button size="large" color="gray" fullWidth>
                    BUTTON
                </Button>
                <Button size="large" color="pink" fullWidth>
                    Button
                </Button>
            </div>
        </div>
    );
}

export default App;
