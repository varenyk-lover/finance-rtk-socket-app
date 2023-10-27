import Paper from "@mui/material/Paper";
import {styled} from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import "./FinanceTable.css";


const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontWeight: 600
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },

}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));


const FinanceTable = ({tickers}) => {

    const createName = (ticker) => {
        switch (ticker) {
            case "AAPL":
                return "Apple";
            case "GOOGL":
                return "Google";
            case "MSFT":
                return "Microsoft";
            case "AMZN":
                return "Amazon";
            case "FB":
                return "Facebook";
            case "TSLA":
                return "Tesla";
            default:
                return "";
        }
    };

    return (
        <TableContainer sx={{minWidth: 200, maxWidth: 500}}
                        component={Paper}>

            <Table sx={{minWidth: 200}} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Company</StyledTableCell>
                        <StyledTableCell align="right">Price</StyledTableCell>
                        <StyledTableCell align="right">Change</StyledTableCell>
                        <StyledTableCell align="right">% Change</StyledTableCell>
                        <StyledTableCell align="right">Yield</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tickers.map((company) => {
                        const colorClasses = +company.change > 0 ? "positive" : "negative";
                        //add "positive" cause tests don't work with empty string as a class
                        const directionClasses = +company.change > 0 ? "positive" : "down";

                        return (
                            <StyledTableRow key={company.ticker}>
                                <StyledTableCell data-testid="name-cell" component="th" scope="row">
                                    {createName(company.ticker)}
                                </StyledTableCell>
                                <StyledTableCell data-testid="price-cell" align="right">
                                    {company.price} $
                                </StyledTableCell>
                                <StyledTableCell data-testid="change-cell" class={`cellItem ${colorClasses}`}
                                                 align="right">
                                    {company.change}
                                </StyledTableCell>
                                <StyledTableCell data-testid="change-percent-cell"
                                                 class={`cellItem ${colorClasses} `} align="right">
                                    <span data-testid="arrow" className={`arrow ${directionClasses}`}>↑</span>
                                    {company.change_percent} %
                                </StyledTableCell>
                                <StyledTableCell data-testid="yield-cell" align="right">
                                    {company.yield} %
                                </StyledTableCell>
                            </StyledTableRow>)
                        }
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


export default FinanceTable;