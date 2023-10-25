import React from 'react';
import './App.css';
import FinanceTable from "./components/FinanceTable";


const App = () => {


    return (
        <div>
            <div className="App-content">
                <header className="App-header">Global Stock Market</header>
                <FinanceTable/>
            </div>

        </div>
    );
}

export default App;
