import React from 'react';
import {Card, Grid, CircularProgress, Box, Typography, IconButton, Paper, Divider } from '@material-ui/core';
import SubtractIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/DeleteForever';
import { withStyles } from '@material-ui/styles';

const style = (theme) => {

    return ({
        card: {
            backgroundColor: theme.palette.secondary.main,
            margin: 'auto',
            borderColor: theme.palette.primary.main,
            borderWidth: '2px'
        },
        text: {
            color: theme.palette.secondary.contrastText
        }
    });

}

const ObjectiveCard = (props) => {

    const {objective,
        addCompletedObjective,
        removeCompletedObjective,
        deleteObjective,
        index,
        classes} = props;

    return(
        <div>
            {index !== 0 &&
                <Divider style={{padding: '5px'}} />
            }
            <Card className={classes.card} elevation={1}>
                <Grid container spacing={1} style={{padding: '10px'}}>
                    <Grid item xs={6} style={{margin: 'auto'}}>
                        <Typography className={classes.text}>
                            {objective.objectiveName}
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Box position="relative" display="inline-flex">
                            <CircularProgress variant="static" value={objective.completedObjectives/objective.requiredToComplete * 100} />
                                <Box
                                    top={0}
                                    left={0}
                                    bottom={0}
                                    right={0}
                                    position="absolute"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Typography className={classes.text} variant="caption" component="div" color="textSecondary">{`${Math.round(objective.completedObjectives/objective.requiredToComplete * 100)}%`}</Typography>
                                </Box>
                            </Box>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton onClick={() => removeCompletedObjective(index)} color="primary">
                            <SubtractIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton onClick={() => addCompletedObjective(index)} color="primary">
                            <AddIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={1}>
                        <IconButton onClick={() => deleteObjective(index)} color="primary">
                            <DeleteIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )

}

export default withStyles(style)(ObjectiveCard);