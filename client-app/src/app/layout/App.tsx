import { useEffect, useState } from 'react';
import axios from 'axios';
import { Segment } from 'semantic-ui-react';
import { Activity } from '../modules/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import {v4 as uuid} from 'uuid';


function App() {
const [activities, setActivities] = useState<Activity[]>([]);
const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
const [editMode, setEditMode] = useState(false);

useEffect(() => {
  axios.get<Activity[]>('http://localhost:5000/api/Activities').then(response => {
    setActivities(response.data);
  })
}, [])

function handleSelectActivity(id:string)
{
  setSelectedActivity(activities.find(x => x.id === id));
}
function handleCancelSelectActivity()
{
  setSelectedActivity(undefined);
}
function handleFormOpen(id?:string){
  id ? handleSelectActivity(id) : handleCancelSelectActivity();
  setEditMode(true);
}
function handleFormClose() {
  setEditMode(false);
}

function handleCreateOrEditActivity(activity: Activity){
  activity.id ? setActivities([...activities.filter(x => x.id !== activity.id), activity])
  : setActivities([...activities, {...activity, id: uuid()}])
  setEditMode(false);
  setSelectedActivity(activity);
}

function handleDeleteActivity(id: String){
  setActivities([...activities.filter(X => X.id !== id)])
}

  return (
    <div>
      
      <NavBar
      openForm = {handleFormOpen}
      />
      <Segment text style={{ marginTop: '5em' }}>
      <ActivityDashboard 
        activities={activities}
        selectedActivity={selectedActivity}
        selectActivity={handleSelectActivity}
        cancelSelectActivity={handleCancelSelectActivity}
        editMode={editMode}
        openForm={handleFormOpen}
        closeForm={handleFormClose}
        createOrEditActivity={handleCreateOrEditActivity}
        deleteActivity={handleDeleteActivity}

      />
      </Segment>
    </div>
  );
}

export default App;
