import React from "react";
import {render, fireEvent} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "./store";
import App from "./App";

describe("App component", () => {
    test("handles tickers switcher correctly", () => {
        const {getByLabelText} = render(
            <Provider store={store}>
                <App/>
            </Provider>
        );

        const turnSwitcher = getByLabelText("Switch tickers");

        fireEvent.click(turnSwitcher);

        // check actions using Redux Toolkit
        expect(store.getState().isTickerOn).toBe(false);
    });
});
