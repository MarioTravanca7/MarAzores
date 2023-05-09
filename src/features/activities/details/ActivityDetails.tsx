import { Button, Card, Grid, GridColumn, Image } from "semantic-ui-react";
import ImagemDefault from "../../../assets/categoryImages/food.jpg";
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivityDetailedSideBar from "./ActivityDetailedSidebar";

export default observer(function ActivityDetails() {
  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    loadActivity,
    loadingInitial,
  } = activityStore;
  const { id } = useParams();

  useEffect(() => {
    if (id) loadActivity(id);
  }, [id, loadActivity]);

  if (loadingInitial || !activity) return <LoadingComponent />;

  return (
   <Grid>
    <Grid.Column width={10}>
      <ActivityDetailedHeader activity={activity}/>
      <ActivityDetailedInfo activity={activity}/>
      <ActivityDetailedChat />
    </Grid.Column>
    <Grid.Column width={6} >
      <ActivityDetailedSideBar />
    </Grid.Column>
   </Grid>
  );
});

//basic color='grey'


// <Grid>
// <Grid.Column width="10">
//   <Card fluid>
//     <Image src={'/assets/categoryImages/travel.jpg'} wrapped ui={false} />
//     <Card.Content>
//       <Card.Header>{activity.title}</Card.Header>
//       <Card.Meta>
//         <span>{activity.description}</span>
//       </Card.Meta>
//       <Card.Description>{activity.description}</Card.Description>
//     </Card.Content>
//     <Card.Content extra>
//       <Button.Group widths="2">
//         <Button
//           as={Link}
//           to={`/manage/${activity.id}`}
//           content="Editar"
//           className="botao-azul"
//         />
//         <Button
//           as={Link}
//           to="/activities"
//           basic
//           color="grey"
//           content="Cancelar"
//         />
//       </Button.Group>
//     </Card.Content>
//   </Card>
// </Grid.Column>
// </Grid>