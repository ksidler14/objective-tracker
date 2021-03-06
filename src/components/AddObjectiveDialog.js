import React, {useState} from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton, Grid, TextField, MenuItem, DialogContentText, Select, withStyles } from '@material-ui/core';
import Add from '@material-ui/icons/AddCircle';

const style = (theme) => {

    return ({
        dialogTitle: {
            backgroundColor: theme.palette.secondary.dark,
            display: 'flex',
            textAlign: 'center',
            justifyContent: 'center'
        },
        dialogBody: {
            backgroundColor: theme.palette.secondary.main
        },
        dialogActions: {
            backgroundColor: theme.palette.secondary.dark
        },
        text: {
            color: theme.palette.secondary.contrastText
        }
    });

}

const AddObjectiveDialog = (props) => {

    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogObjectiveName, setDialogObjectiveName] = useState("");
    const [dialogRequiredToComplete, setDialogRequiredToComplete] = useState(0);

    const {addObjective, classes} = props;

    const openDialog = () => {
        setDialogOpen(true);
    }

    const closeDialog = () => {
        setDialogObjectiveName("");
        setDialogRequiredToComplete(0);
        setDialogOpen(false);
    }

    const submitObjective = () => {
        addObjective({objectiveName: dialogObjectiveName, requiredToComplete: dialogRequiredToComplete, completedObjectives: 0});
        closeDialog();
    }

    const handleObjectiveNameChange = event => {
        setDialogObjectiveName(event.target.value);
    }

    const handleRequiredToCompleteChange = event => {
        setDialogRequiredToComplete(event.target.value);
    }

    return(
        <div>
            <IconButton onClick={openDialog} color="secondary">
                <Add />
            </IconButton>
            <Dialog open={dialogOpen} onEscapeKeyDown={closeDialog}>
                <DialogTitle className={classes.dialogTitle}>
                    Add Objective
                </DialogTitle>
                <DialogContent className={classes.dialogBody}>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <DialogContentText className={classes.text}>
                                Objective Name
                            </DialogContentText>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField onChange={handleObjectiveNameChange} />
                        </Grid>
                        <Grid item xs={6}>
                            <DialogContentText className={classes.text}>
                                Required Times To Complete
                            </DialogContentText>
                        </Grid>
                        <Grid item xs={6}>
                            <Select onChange={handleRequiredToCompleteChange}>
                                {[...Array(15).keys()].map((_, index) => {
                                    return(
                                        <MenuItem key={index} value={index + 1}>{index + 1}</MenuItem>
                                    )
                                })}
                            </Select>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions className={classes.dialogActions}>
                    <Button onClick={closeDialog}>
                        Cancel
                    </Button>
                    <Button onClick={submitObjective} disabled={dialogObjectiveName === "" || dialogRequiredToComplete === 0}>
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )

}

export default withStyles(style)(AddObjectiveDialog);