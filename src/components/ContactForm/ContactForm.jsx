import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const initialValues = { name: "", number: "" };
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Мінімум 3 символи")
      .max(50, "Максимум 50 символів")
      .required("Обов'язкове поле"),
    number: Yup.string()
      .matches(
        /^\+?\d{1,4}?[.-\s]?\(?\d{1,3}?\)?[.-\s]?\d{1,4}[.-\s]?\d{1,4}$/,
        "Невірний формат номера"
      )
      .required("Обов'язкове поле"),
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
          <label>Ім'я</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>
        <div className={styles.field}>
          <label>Номер телефону</label>
          <Field type="tel" name="number" />
          <ErrorMessage
            name="number"
            component="div"
            className={styles.error}
          />
        </div>
        <button type="submit">Додати контакт</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
