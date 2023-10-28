import {grey} from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import * as React from "react";
import "./CustomizedSwitcher.css";


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