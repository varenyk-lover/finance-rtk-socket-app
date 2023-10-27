import React from "react";
import {render} from "@testing-library/react";
import FinanceTable from "./FinanceTable";


describe("FinanceTable component", () => {
    test("display data correctly", () => {
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

        //check values
        expect(priceCell).toBeInTheDocument();
        expect(changeCell).toBeInTheDocument();
        expect(changePercentCell).toBeInTheDocument();
        expect(yieldCell).toBeInTheDocument();
    });
});

