import React from 'react';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './FinanceTable.css';

const data = [
    {
        "ticker": "AAPL",
        "exchange": "NASDAQ",
        "price": "214.22",
        "change": "-7.29",
        "change_percent": "0.16",
        "dividend": "0.55",
        "yield": "0.78",
        "last_trade_time": "2023-10-24T12:41:47.000Z"
    },
    {
        "ticker": "GOOGL",
        "exchange": "NASDAQ",
        "price": "118.77",
        "change": "-63.84",
        "change_percent": "0.35",
        "dividend": "0.30",
        "yield": "0.20",
        "last_trade_time": "2023-10-24T12:41:47.000Z"
    },
    {
        "ticker": "MSFT",
        "exchange": "NASDAQ",
        "price": "242.09",
        "change": "-125.61",
        "change_percent": "0.69",
        "dividend": "0.39",
        "yield": "0.13",
        "last_trade_time": "2023-10-24T12:41:47.000Z"
    },
    {
        "ticker": "AMZN",
        "exchange": "NASDAQ",
        "price": "173.45",
        "change": "157.36",
        "change_percent": "0.31",
        "dividend": "0.72",
        "yield": "1.01",
        "last_trade_time": "2023-10-24T12:41:47.000Z"
    },
    {
        "ticker": "FB",
        "exchange": "NASDAQ",
        "price": "151.91",
        "change": "196.06",
        "change_percent": "0.66",
        "dividend": "0.72",
        "yield": "0.11",
        "last_trade_time": "2023-10-24T12:41:47.000Z"
    },
    {
        "ticker": "TSLA",
        "exchange": "NASDAQ",
        "price": "180.52",
        "change": "-77.34",
        "change_percent": "0.86",
        "dividend": "0.69",
        "yield": "1.31",
        "last_trade_time": "2023-10-24T12:41:47.000Z"
    }

];


const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },

}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function FinanceTable() {
    return (
        <TableContainer sx={{minWidth: 200, maxWidth: 600}} sx={{display: "flex", justifyContent: 'center'}}
                        component={Paper}>

            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Ticker</StyledTableCell>
                        <StyledTableCell align="right">Price</StyledTableCell>
                        <StyledTableCell align="right">Change</StyledTableCell>
                        <StyledTableCell align="right">% Change</StyledTableCell>
                        <StyledTableCell align="right">Yield</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((company) => {
                            const priceClasses = +company.change > 0 ? 'positive' : 'negative';
                            return (
                                <StyledTableRow key={company.ticker}>
                                    <StyledTableCell component="th" scope="row">
                                        {company.ticker}
                                    </StyledTableCell>
                                    <StyledTableCell
                                        align="right">{company.price} $
                                    </StyledTableCell>
                                    <StyledTableCell class={`cellItem ${priceClasses}`} align="right">
                                        {company.change}
                                    </StyledTableCell>
                                    <StyledTableCell class={`cellItem ${priceClasses}`} align="right">
                                        {company.change_percent} %
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{company.yield} %</StyledTableCell>
                                </StyledTableRow>)
                        }
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
