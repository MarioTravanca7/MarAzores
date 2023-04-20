import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
  activities: Activity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
}

export default function ActiivityList({
  activities,
  selectActivity,
  deleteActivity,
}: Props) {
  return (
    <Segment>
      <Item.Group divided>
        {activities.map((activity) => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Description>
                <div>{activity.description}</div>
                <div>{activity.description}</div>
              </Item.Description>
              <Item.Extra>
                <Button
                  onClick={() => selectActivity(activity.id)}
                  floated="right"
                  content="Ver"
                  color="blue"
                />
                <Button
                  onClick={() => deleteActivity(activity.id)}
                  floated="right"
                  content="Apagar"
                  color="red"
                />
                <Label basic content={activity.description} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
}
