import { Container, Grid } from "semantic-ui-react";
import { Activity } from "../../../app/modules/activity";
import ActivityDetails from "../details/ActivityDeatils";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id:string) => void;
  cancelSelectActivity: () => void;
  editMode: boolean;
  openForm: (id:string) => void;
  closeForm: () => void;
  createOrEditActivity: (activity: Activity) => void;
  deleteActivity: (id: string) => void;
  
}

export default function ActivityDashboard({activities, selectActivity, selectedActivity,cancelSelectActivity, 
  editMode, openForm,closeForm, createOrEditActivity, deleteActivity}:Props) {
  return (
    <Container>
    <Grid>
      <Grid.Column width='10'>

        <ActivityList 
          activities = {activities} 
          deleteActivity = {deleteActivity}
          selectActivity={selectActivity}/>
      
      </Grid.Column >
      <Grid.Column width = '6'>
        {selectedActivity && !editMode &&
        <ActivityDetails 
            activity = {selectedActivity} 
            cancelSelectActivity={cancelSelectActivity}
            openForm = {openForm}
        />}
        {editMode &&
        <ActivityForm 
          closeForm={closeForm} 
          activity = {selectedActivity}
          createOrEditActivity = {createOrEditActivity}
        />
        }

      </Grid.Column>
    </Grid>
    </Container>

        )
}