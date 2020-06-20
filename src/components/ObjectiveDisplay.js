import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import ObjectiveCard from './ObjectiveCard';
import AddObjectiveDialog from './AddObjectiveDialog';

const ObjectiveDisplay = () => {

    const [objectives, setObjectives] = useState([]);

    const addObjective = (objective) => {

        setObjectives([...objectives, objective]);

    }

    const deleteObjective = (index) => {

        const newArray = objectives.filter((_, position) => index !== position)

        setObjectives(newArray);

    }

    const addCompletedObjective = (index) => {    

        let objectiveCompleted = objectives[index];

        if((objectiveCompleted.completedObjectives/objectiveCompleted.requiredToComplete * 100) < 100) {

            objectiveCompleted.completedObjectives = objectiveCompleted.completedObjectives + 1;

            const newArray = objectives.slice(0);

            newArray[index] = objectiveCompleted;

            setObjectives(newArray);

        }

    }

    const removeCompletedObjective = (index) => {

        let objectiveRemoved = objectives[index];

        if(objectiveRemoved.completedObjectives !== 0) {

            objectiveRemoved.completedObjectives = objectiveRemoved.completedObjectives - 1;

            const newArray = objectives.slice(0);

            newArray[index] = objectiveRemoved;

            setObjectives(newArray);

        }

    }

    return(
        <Grid container spacing={1}>
            <Grid item xs={2} />
            <Grid item xs={8}>
                {objectives.length !== 0 &&
                    objectives.map((objective, index)=> {
                        return(
                            <ObjectiveCard key={index}
                                index={index}
                                objective={objective}
                                addCompletedObjective={addCompletedObjective}
                                removeCompletedObjective={removeCompletedObjective}
                                deleteObjective={deleteObjective} />
                        )
                    })
                }
            </Grid>
            <Grid item xs={1}>
                <AddObjectiveDialog addObjective={addObjective} />
            </Grid>
            <Grid item={1} />
        </Grid>
    )

}

export default ObjectiveDisplay;