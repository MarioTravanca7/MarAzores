import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import ActivityForm from "../../features/activities/form/ActivityForm";
import TestErrors from "../../features/errors/TestError";
import NotFound from "../../features/errors/NotFound";
import ServerError from "../../features/errors/ServerError";
import LoginForm from "../../features/users/LoginForm";
import LoginPage from "../layout/LoginPage";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            //{path: '', element: <HomePage/> },
            {path: 'activities', element: <ActivityDashboard/> }, //activities -> é o caminho no browser
            {path: 'activities/:id', element: <ActivityDetails/> },
            {path: 'createActivity', element: <ActivityForm key='create' />},
            {path: 'manage/:id', element: <ActivityForm key='manage' />},
            {path: 'login/', element: <LoginForm />},
            {path: 'errors', element: <TestErrors/> },
            {path: 'not-found', element: <NotFound/> },
            {path: 'server-error', element: <ServerError/> },
            {path: '*', element: <Navigate replace to='/not-found' /> },
            {path: 'loginPage/', element: <LoginPage />},
        ]
    }
]

export const router = createBrowserRouter(routes); 