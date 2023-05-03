import { Button, Header, Segment } from "semantic-ui-react";
import { useEffect, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Activity } from "../../../app/models/activity";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { v4 as uuid } from "uuid";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from "../../../app/common/form/MyTextArea";

export default observer(function ActivityForm() {
  const { activityStore } = useStore();
  const {
    selectedActivity,
    createActivity,
    updateActivity,
    loading,
    loadActivity,
    loadingInitial,
  } = activityStore;
  const { id } = useParams();
  const navigate = useNavigate();

  const [activity, setActivity] = useState<Activity>({
    id: "",
    title: "",
    description: "",
  });

  const validationSchema = Yup.object({
    title: Yup.string().required("The activity title is required"),
    description: Yup.string().required("The activity description is required"),
  });

  useEffect(() => {
    if (id) loadActivity(id).then((activity) => setActivity(activity!));
  }, [id, loadActivity]);

  function handleFormSubmit(activity: Activity) {
    if(activity.id.length === 0){
      let newActivity = {
        ...activity,
        id: uuid()
      };
      createActivity(newActivity).then(()=> navigate(`/activities/${activity.id}`))
    }
    else{
      updateActivity(activity).then(()=> navigate(`/activities/${activity.id}`))
    }
    // se tiver id é para o update e envia-se a atividade / se não : criar a atividade
    //activity.id ? updateActivity(activity) : createActivity(activity);
  }



  if (loadingInitial) return <LoadingComponent content="Loading activity..." />;

  return (
    <Segment clearing>
      <Header content='Activity Details' sub color='teal' />
      <Formik
        validationSchema={validationSchema}
        enableReinitialize
        initialValues={activity}
        onSubmit={(values) => handleFormSubmit(values)}
      >
        {({ handleSubmit, isValid, isSubmitting, dirty }) => (
          <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
            <MyTextInput name='title' placeholder='title' />

            <Header content='Location Details' sub color='teal' />
            <MyTextArea rows={3} placeholder="Descrição" name="description" />

            <Button
              disabled={isSubmitting || !dirty || !isValid}
              loading={loading}
              floated="right"
              positive
              type="submit"
              content="Submeter"
            />
            
            <Button
              as={Link}
              to="/activities"
              floated="right"
              positive
              type="submit"
              content="Cancelar"
            />
          </Form>
        )}
      </Formik>
    </Segment>
  );
});

