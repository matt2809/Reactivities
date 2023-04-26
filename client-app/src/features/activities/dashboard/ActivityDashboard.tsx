import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForms from "../form/ActivityForm";

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity : () => void;
    editMode : boolean;
    openForm : (id: string) => void;
    closeForm : () => void,
    createOrEdit : (activity: Activity) => void,
    DeleteActivity: (id: string) => void


}

export default function ActivityDashboard({ activities, selectActivity, selectedActivity, cancelSelectActivity, editMode, closeForm, openForm, createOrEdit, DeleteActivity }: Props) {
    return (
        <Grid>
            <Grid.Column width={10}>
                
                    <ActivityList activities={activities} selectActivity={selectActivity} DeleteActivity={DeleteActivity}/>
                    
                
            </Grid.Column>
            <Grid.Column width={6}>
                {selectedActivity && !editMode &&
                    <ActivityDetails activity={selectedActivity} 
                    cancelSelectActivity={cancelSelectActivity} 
                    openForm={openForm}
                    />
                }
                {editMode &&
                <ActivityForms activity={selectedActivity} closeForm={closeForm} createOrEdit={createOrEdit}/>
                }   
            </Grid.Column>

        </Grid>

    )
}