import React, { SyntheticEvent, useState } from "react";
import { Button, Item, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";
import { Link } from "react-router-dom";

interface Props {
  activity: Activity;
}

export default function AcitivityListItem({ activity }: Props) {
  const { activityStore } = useStore();
  const { deleteActivity, loading } = activityStore;
  const [target, setTarget] = useState("");

  function handleActivityDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  }

  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="medium" src="/assets/marAzores.png" />
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Description>Hosted by Bob</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment clearing>
        <Item.Extra>
          <Button
            as={Link}
            to={`/activities/${activity.id}`}
            floated="right"
            content="Ver"
            color="blue"
          />
          <Button
            name={activity.id}
            loading={loading && target === activity.id}
            onClick={(e) => handleActivityDelete(e, activity.id)}
            floated="right"
            content="Apagar"
            color="red"
          />
        </Item.Extra>
      </Segment>
    </Segment.Group>
  );
}


{
  /*<Item key={activity.id}>
    <Item.Content>
      <Item.Header as="a">{activity.title}</Item.Header>
      <Item.Description>
        <div>{activity.description}</div>
        <div>{activity.description}</div>
      </Item.Description>
      <Item.Extra>
        <Button
          as={Link}
          to={`/activities/${activity.id}`}
          floated="right"
          content="Ver"
          color="blue"
        />
        <Button
          name={activity.id}
          loading={loading && target === activity.id}
          onClick={(e) => handleActivityDelete(e, activity.id)}
          floated="right"
          content="Apagar"
          color="red"
        />
        <Label basic content={activity.description} />
      </Item.Extra>
    </Item.Content>
  </Item> */
}

{
  /* <Segment>
      <Grid>
        <Grid.Column width={4}>
          <Image src={'/assets/categoryImages/travel.jpg'} />
        </Grid.Column>

        <Grid.Column width={12}>
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Description>
                <div>{activity.description}</div>
                <div>{activity.description}</div>
              </Item.Description>
              <Item.Extra>
                <Button
                  as={Link}
                  to={`/activities/${activity.id}`}
                  floated="right"
                  content="Ver"
                  color="blue"
                />
                <Button
                  name={activity.id}
                  loading={loading && target === activity.id}
                  onClick={(e) => handleActivityDelete(e, activity.id)}
                  floated="right"
                  content="Apagar"
                  color="red"
                />
                <Label basic content={activity.description} />
              </Item.Extra>
            </Item.Content>
          </Item>
        </Grid.Column>
      </Grid>
    </Segment> */
}
