import React from 'react';
import {Card, Grid, CircularProgress, Box, Typography, IconButton } from '@material-ui/core';
import SubtractIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/DeleteForever';

const ObjectiveCard = (props) => {

    const {objective,
        addCompletedObjective,
        removeCompletedObjective,
        deleteObjective,
        index} = props;

    return(
        <Card>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    {objective.objectiveName}
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
                                <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(objective.completedObjectives/objective.requiredToComplete * 100)}%`}</Typography>
                            </Box>
                        </Box>
                </Grid>
                <Grid item xs={1}>
                    <IconButton onClick={() => removeCompletedObjective(index)}>
                        <SubtractIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={1}>
                    <IconButton onClick={() => addCompletedObjective(index)}>
                        <AddIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={1}>
                    <IconButton onClick={() => deleteObjective(index)}>
                        <DeleteIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </Card>
    )

}

export default ObjectiveCard;