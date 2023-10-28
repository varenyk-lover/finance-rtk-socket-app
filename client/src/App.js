import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {io} from "socket.io-client";
import "./App.css";
import CustomizedSwitcher from "./components/CustomizedSwitcher/CustomizedSwitcher";
import FinanceTable from "./components/FinanceTable/FinanceTable";
import {turnTickers, updateTickers} from "./store/slices/tickersSlice";


const App = () => {

    const socket = io("http://localhost:4000");

    const dispatch = useDispatch();

    const tickers = useSelector((state) => state.tickers);
    const isTickerOn = useSelector((state) => state.isTickerOn);


    useEffect(() => {
        // set listener of server to get data on mount or when switcher is on
        socket.emit("start");
        socket.on("ticker", (data) => {
            // check the switcher and update data if it's on
            if (isTickerOn) {
                /* eslint-disable-next-line    */
                dispatch(updateTickers(data));
            }
        });

        // disconnect on unmount
        return () => {
            socket.disconnect();
        };
        /* eslint-disable-next-line    */
    }, [dispatch, isTickerOn]);

    const handleTickersSwitcher = () => {
        const newIsTickerOn = !isTickerOn;
        /* eslint-disable-next-line     */
        dispatch(turnTickers(newIsTickerOn));
        if (!newIsTickerOn) {
            //disconnect if switcher off
            socket.disconnect();
        } else {
            socket.connect();
            socket.emit("start");
        }
        console.log(newIsTickerOn);
    };

    return (
        <div>
            <div className="App-content">
                <header className="App-header">Global Stock Market</header>
                <main>
                    <CustomizedSwitcher isTickerOn={isTickerOn} handleTickersSwitcher={handleTickersSwitcher}/>
                    <FinanceTable tickers={tickers}/>
                </main>

            </div>

        </div>
    );
}


export default App;
