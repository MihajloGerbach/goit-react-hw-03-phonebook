import { Formik } from 'formik';
import { object, string } from 'yup';

import { Form, Label, ErrorText, Input, Button } from './ContactForm.styled';

const initialValues = { name: '', number: '' };

const FormSchema = object({
  name: string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,

      `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`
    )
    .required('Required'),
  number: string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      `Phone number must be digits and can contain spaces, dashes, parentheses and can start with +`
    )
    .required('Required'),
});

export const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FormSchema}
      onSubmit={(values, actions) => {
        actions.resetForm();
        return onSubmit(values);
      }}
    >
      <Form>
        <Label>
          Name
          <Input type="text" name="name" />
          <ErrorText name="name" component="p" />
        </Label>
        <Label>
          Number
          <Input type="tel" name="number" />
          <ErrorText name="number" component="p" />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};