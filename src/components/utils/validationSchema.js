import * as Yup from "yup";

const TodoSchema = Yup.object().shape({
  body: Yup.string()
    .min(2, "Too Short!")
    .max(64, "Too Long!")
    .required("Required")
});

export default TodoSchema;
