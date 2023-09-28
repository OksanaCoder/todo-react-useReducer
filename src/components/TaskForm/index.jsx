import React from "react";
import { Formik, Form, Field } from "formik";
import TodoSchema from "../utils/validationSchema";
import styles from "./TaskForm.module.scss";

const TaskForm = ({ handleRemoveRask, handleAddTask }) => {
  const handleSubmit = (values, formikBag) => {
    handleAddTask(values);
    formikBag.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={{ body: "" }}
        onSubmit={handleSubmit}
        validationSchema={TodoSchema}
      >
        {({ errors, touched }) => (
          <Form>
            {errors.body && touched.body ? (
              <Field name="body" className={styles.error} />
            ) : (
              <Field name="body" />
            )}

            {errors.body && touched.body ? (
              <div className={styles.errorMessage}>{errors.body}</div>
            ) : null}
            <input type="submit" value="Add new task" />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default TaskForm;
