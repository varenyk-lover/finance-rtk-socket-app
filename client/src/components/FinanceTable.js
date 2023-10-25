import React, {useEffect} from 'react';
import './FinanceTable.css';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useSelector, useDispatch} from 'react-redux';
import {io} from 'socket.io-client';
import {updateTickers, tickersSelector} from '../store/slices/tickersSlice';


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

const socket = io('http://localhost:4000');

export default function FinanceTable() {
    const dispatch = useDispatch();

    const tickers = useSelector(tickersSelector.getTickers);
    useEffect(() => {
        socket.emit('start');
        socket.on('ticker', (data) => {
            dispatch(updateTickers(data));
        });
    }, [dispatch]);

    const createName = (ticker) => {
        switch (ticker) {
            case 'AAPL':
                return 'Apple';
            case 'GOOGL':
                return 'Google';
            case 'MSFT':
                return 'Microsoft';
            case 'AMZN':
                return 'Amazon';
            case 'FB':
                return 'Facebook';
            case 'TSLA':
                return 'Tesla';
            default:
                return '';
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
                        const priceClasses = +company.change > 0 ? 'positive' : 'negative';
                        const changeClasses = +company.change > 0 ? '' : 'down';
                        console.log(tickers);
                        return (
                            <StyledTableRow key={company.ticker}>
                                <StyledTableCell component="th" scope="row">
                                    {createName(company.ticker)}
                                </StyledTableCell>
                                <StyledTableCell
                                    align="right">{company.price} $
                                </StyledTableCell>
                                <StyledTableCell class={`cellItem ${priceClasses}`} align="right">
                                    {company.change}
                                </StyledTableCell>
                                <StyledTableCell class={`cellItem ${priceClasses}`} align="right">
                                    <span className={`arrow ${priceClasses} ${changeClasses}`}>↑</span>
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
