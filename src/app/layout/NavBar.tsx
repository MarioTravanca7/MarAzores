import { Button, Container, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} to="/" header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
          Back Office
        </Menu.Item>

        <Menu.Item as={NavLink} to="/createActivity" header> Team1</Menu.Item>
        <Menu.Item as={NavLink} to="/activities" name="Team" />

        <Menu.Item as={NavLink} to="/activities" name="Activities" />
        <Menu.Item as={NavLink} to="/errors" name="Errors" />
        <Menu.Item>
          <Button
            as={NavLink} to="/createActivity"
            positive
            content="Create Activity"
          />
        </Menu.Item>
        
      </Container>
    </Menu>
  );
}

{/* <Button
  onClick={() => activityStore.openForm()}
  positive
  content="Create Activity"
/>; */}
