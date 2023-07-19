// TrainScheduleList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { List, ListItem, ListItemText, ListItemIcon, Paper, Typography } from '@mui/material';
import TrainIcon from '@mui/icons-material/Train';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 500,
        margin: '0 auto',
        marginTop: theme.spacing(2),
        padding: theme.spacing(2),
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
    },
}));

const dummyTrainData = [
    // ... (same dummy data as before)
];

const TrainScheduleList = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography variant="h6" gutterBottom>
                Train Schedules
            </Typography>
            <List>
                {dummyTrainData.map((train) => (
                    <Link
                        to={`/train/${train.id}`} // Assuming each train has a unique id
                        key={train.id}
                        className={classes.link}
                    >
                        <ListItem>
                            <ListItemIcon>
                                <TrainIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={`${train.trainName} (${train.trainNumber})`}
                                secondary={`Departure: ${train.departureTime}`}
                            />
                            <ListItemText
                                primary={`Seats Available: Sleeper - ${train.seatsAvailable.sleeper}, AC - ${train.seatsAvailable.AC}`}
                                secondary={`Price: Sleeper - ${train.price.sleeper}, AC - ${train.price.AC}`}
                            />
                            <ListItemText
                                primary={`Delayed By: ${train.delayedBy} mins`}
                            />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Paper>
    );
};

export default TrainScheduleList;
