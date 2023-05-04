import { Button, Container, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import LogoImage from "../../../src/assets/marAzores.png";

export default function NavBar() {
  return (
    <Menu inverted fixed="top" style={{ marginTop: 0, marginBottom: 0, height: '50px' }}>
      <Container>
        <Menu.Item as={NavLink} to="/" header>
          <img
            src={LogoImage}
            alt='logo'
            style={{marginRight: 10, width: '70px', height: '50px'}}
          />
          Back Office
        </Menu.Item>

        <Menu.Item as={NavLink} to="/createActivity" header> Team1</Menu.Item>
        <Menu.Item as={NavLink} to="/activities" name="Team" />

        <Menu.Item as={NavLink} to="/activities" name="Activities" />
        {/* <Menu.Item as={NavLink} to="/errors" name="Errors" /> */}
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
