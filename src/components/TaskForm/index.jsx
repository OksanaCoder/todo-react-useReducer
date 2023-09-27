import React from "react";
import { Formik, Form, Field } from "formik";

const TaskForm = ({ handleRemoveRask, handleAddTask }) => {
  const handleSubmit = (values, formikBag) => {
    handleAddTask(values);
    formikBag.resetForm();
  };
  return (
    <>
      <Formik initialValues={{ body: "" }} onSubmit={handleSubmit}>
        <Form>
          <Field name="body" />
          <input type="submit" value="Add new task" />
        </Form>
      </Formik>
    </>
  );
};

export default TaskForm;
