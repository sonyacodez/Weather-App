import React, { useContext, useState, useEffect } from 'react';
import { observer } from "mobx-react-lite";
import { makeStyles, Paper } from '@material-ui/core';
import CityStoreContext from '../../../stores/CityStore';
import toastApiClient from '../../../ApiClient/ToastApiClient';

export const FiveDayForecast = observer(() => {
    const classes = useStyles();
    const cityStore = useContext(CityStoreContext);
    const [ currentCity, setCurrentCity ] = useState(undefined);
    const [ fiveDayForecast, setFiveDayForecast ] = useState([]);
    useEffect(() => {
        const fetchFiveDayForecast = async() => {
            setFiveDayForecast(
                await toastApiClient.getFiveDayForecast(cityStore.currentCity, cityStore.temperatureScale)
            );
        };
        if(cityStore.currentCity !== currentCity){
            fetchFiveDayForecast();
            setCurrentCity(cityStore.currentCity);
        }
    }, [currentCity, cityStore.currentCity, cityStore.temperatureScale]);
    return (
        <div>
            {fiveDayForecast.map((day, index) => (
                <Paper key={index} className={classes.paper}>
                    <div>{day.weatherDescription}</div>
                    <div>{day.highTemperature}</div>
                    <div>{day.lowTemperature}</div>
                    <div>{day.date}</div>
                    <div>{day.cityName}</div>
                </Paper>
            ))}
        </div>
    );
});

const useStyles = makeStyles(() => ({
    paper: {
        height: 150,
        width: 200
    }
}));