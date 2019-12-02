import React from 'react';
import { CurrentWeather } from './CurrentWeather';
import { FiveDayForecast } from './FiveDayForecast';
import { Paper, Divider, makeStyles } from '@material-ui/core';

export const HomeCard = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <CurrentWeather/>
                <Divider className={classes.divider} variant="middle"/>
                <FiveDayForecast/>
            </Paper>
        </div>
    );
};

const useStyles = makeStyles(() => ({
    root: {
        display: "grid",
        width: "70vw",
        margin: "0 auto"
    },
    paper: {
        opacity: 0.75,
        borderRadius: "40px",
        boxShadow: "5px 5px 30px 7px rgba(255,255,255,1), -5px -5px 30px 7px rgba(255,255,255,1)"
    },
    divider: {
        marginTop: "1.5vh",
        marginBottom: "1.5vh"
    }
}));
