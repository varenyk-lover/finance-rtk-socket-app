import React from "react";
import {render, fireEvent} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "./store";
import App from "./App";

//block "describe" contain all tests for App component
describe("App component", () => {
    test("handles tickers switcher correctly", () => {
        const {getByLabelText} = render(
            <Provider store={store}>
                <App/>
            </Provider>
        );

        //find element with specific label "Switch tickers"
        const turnSwitcher = getByLabelText("Switch tickers");

        fireEvent.click(turnSwitcher);

        // check the expected change of state after interacting with the component
        expect(store.getState().isTickerOn).toBe(false);
    });
});
