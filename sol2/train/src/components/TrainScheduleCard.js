// TrainScheduleCard.js
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Paper, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 500,
        margin: '0 auto',
        marginTop: theme.spacing(2),
        padding: theme.spacing(2),
    },
}));

const TrainScheduleCard = ({ train }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography variant="h6" gutterBottom>
                {train.trainName} ({train.trainNumber})
            </Typography>
            <Typography variant="body1" gutterBottom>
                Departure: {train.departureTime}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Seats Available: Sleeper - {train.seatsAvailable.sleeper}, AC - {train.seatsAvailable.AC}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Price: Sleeper - {train.price.sleeper}, AC - {train.price.AC}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Delayed By: {train.delayedBy} mins
            </Typography>
        </Paper>
    );
};

export default TrainScheduleCard;
