import * as React from 'react';
import {grey} from '@mui/material/colors';
import './CustomizedSwitcher.css';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";

const label = {inputProps: {"aria-label": "Switch tickers"}};

const CustomizedSwitcher = ({handleTickersSwitcher, isTickerOn}) => {
    return (
        <div className="container">
            <Stack direction="row" spacing={1} alignItems="center">
                <Typography sx={{color: grey[50]}}>Off</Typography>
                <Switch {...label} checked={isTickerOn} onChange={handleTickersSwitcher} color="warning"/>
                <Typography sx={{color: grey[50]}}>On</Typography>
            </Stack>
        </div>
    );
}

export default CustomizedSwitcher;