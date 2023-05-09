import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import { observer } from "mobx-react-lite";
import { Outlet, useLocation } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import { ToastContainer } from "react-toastify";
import LoginPage from "./LoginPage";
import { useStore } from "../stores/store";
import LoadingComponent from "./LoadingComponent";
import { useEffect } from "react";
import ModalContainer from "../common/modals/ModalContainer";

function App() {
  const location = useLocation();
  const {commonStore, userStore} = useStore();

  useEffect(() => {
    if(commonStore.token) {
      userStore.getUser().finally(() => commonStore.setAppLoaded())
    } else {
      commonStore.setAppLoaded()
    }
  }, [commonStore, userStore])

  if(!commonStore.appLoaded) return <LoadingComponent content="Loading activities...(App.tsx)" />

  return (
    <>
    <ModalContainer />
    <ToastContainer position='bottom-right' hideProgressBar theme='colored' />
      {location.pathname === "/" ? (
        <HomePage />
      ) 
      : location.pathname === "/loginPage" ? (
        <LoginPage />
      )
      : (
        <>
          <NavBar />
          <Container style={{ marginTop: "7em" }}>
            <Outlet />
          </Container>
        </>
      ) }
    </>
  );
}

export default observer(App);
