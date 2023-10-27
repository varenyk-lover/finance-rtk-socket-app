import {render} from "@testing-library/react";
import React from "react";
import FinanceTable from "./FinanceTable";


describe("FinanceTable component", () => {
    //    create fixed data we expect to see
    const mockData = [
        {
            ticker: "AAPL",
            exchange: "NASDAQ",
            price: 123.45,
            change: 1.23,
            change_percent: 1.0,
            dividend: 0.5,
            yield: 1.5,
        },
    ];

    const {getByTestId} = render(<FinanceTable tickers={mockData}/>);
    // find elements by special id for testing
    const nameCell = getByTestId("name-cell");
    const priceCell = getByTestId("price-cell");
    const changeCell = getByTestId("change-cell");
    const changePercentCell = getByTestId("change-percent-cell");
    const yieldCell = getByTestId("yield-cell");
    const arrowElement = getByTestId("arrow");
    const colorClass = mockData[0].change > 0 ? "positive" : "negative";
    const directionClass = mockData[0].change > 0 ? "positive" : "down"

    test("display data correctly", () => {
        //  check whether the data contains only required values
        expect(nameCell).toBeInTheDocument();
        expect(priceCell).toBeInTheDocument();
        expect(changeCell).toBeInTheDocument();
        expect(changePercentCell).toBeInTheDocument();
        expect(yieldCell).toBeInTheDocument();
    });

    test("apply the appropriate class depending on the change value", () => {
        //  toHaveClass method to check class
        expect(changeCell).toHaveClass(colorClass);
        expect(changePercentCell).toHaveClass(colorClass);
        expect(arrowElement).toHaveClass(directionClass);
    });


});

