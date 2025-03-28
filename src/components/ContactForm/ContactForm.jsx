import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const initialValues = { name: "", number: "" };
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Push min 3 symbols")
      .max(50, "Max 50 symbols")
      .required("Required field"),
    number: Yup.string()
      .matches(
        /^\+?\d{1,4}?[.-\s]?\(?\d{1,3}?\)?[.-\s]?\d{1,4}[.-\s]?\d{1,4}$/,
        "Invalid number format"
      )
      .required("Required field"),
  });

  const handleSubmit = (values, { resetForm }) => {
    onAddContact({ id: nanoid(), ...values });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.field}>
          <label>Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>
        <div className={styles.field}>
          <label>Phone number</label>
          <Field type="tel" name="number" />
          <ErrorMessage
            name="number"
            component="div"
            className={styles.error}
          />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
