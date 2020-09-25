import React, { ReactElement } from 'react';
import * as Yup from 'yup';
import { Form, FormikProps, withFormik, useField, FieldHookConfig } from 'formik';
import classNames from 'classnames';
import { Dispatch } from 'redux';

import { addUser } from '../redux/actions/users';
import { UserI } from '../types/users';

interface InnerFormValues {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface OtherProps {
  title: string;
}

interface AddUserFormProps {
  title: string;
  className?: string;
  dispatch: Dispatch<any>;
}

interface MyTextInputProps {
  label: string;
}

const FormBlock = ({ label, ...props }: FieldHookConfig<string> & MyTextInputProps) => {
  const [field, meta] = useField(props);
  return (
    <div className="add-user__form-block">
      <label className="add-user__form-label" htmlFor={props.name}>
        {label}
      </label>
      <input type={props.type} className="add-user__form-input" {...field} />
      {meta.touched && meta.error && <div className="add-user__form-error">{meta.error}</div>}
    </div>
  );
};

const InnerForm = (props: OtherProps & FormikProps<InnerFormValues>) => {
  const { touched, errors, isSubmitting, title } = props;
  return (
    <Form className="add-user__form">
      <h2 className="add-user__title">{title}</h2>

      <FormBlock label="id" name="id" type="text" />
      <FormBlock label="first name" name="firstName" type="text" />
      <FormBlock label="last name" name="lastName" type="text" />
      <FormBlock label="email" name="email" type="text" />
      <FormBlock label="phone" name="phone" type="text" />

      <button
        className="add-user__form-btn"
        type="submit"
        disabled={
          isSubmitting || Object.keys(touched).length === 0 || Object.keys(errors).length !== 0
            ? true
            : false
        }>
        Добавить
      </button>
    </Form>
  );
};

const AddUserForm = withFormik<AddUserFormProps, InnerFormValues>({
  mapPropsToValues: (props) => {
    return {
      email: '',
      firstName: '',
      lastName: '',
      id: 0,
      phone: '',
    };
  },
  validationSchema: Yup.object({
    firstName: Yup.string().required('required'),
    lastName: Yup.string().required('required'),
    phone: Yup.string()
      .matches(
        /^[(]{1}[0-9]{3}[)]{1}[0-9]{3}[-]{1}[0-9]{4}$/,
        'Phone number should look like: (999)999-9999',
      )
      .required('required'),
    email: Yup.string().email('Invalid email').required('required'),
    id: Yup.number().typeError('Should be a number').required('required'),
  }),
  handleSubmit: (values: UserI, { setSubmitting, props }) => {
    setTimeout(() => {
      props.dispatch(addUser(values));
      setSubmitting(false);
    }, 500);
  },
})(InnerForm);

const AddUser = ({ title, className, dispatch }: AddUserFormProps): ReactElement => {
  const [visibleForm, setVisibleForm] = React.useState(false);

  const onOpenButtonClick = (visible: boolean) => {
    setVisibleForm(visible);
  };

  return (
    <section className="add-user">
      <div className="add-user__content">
        <button onClick={() => onOpenButtonClick(!visibleForm)} className="add-user__open-form">
          {visibleForm ? 'Закрыть форму' : 'Открыть форму'}
        </button>
        <div className={classNames('add-user__form-container', className, { active: visibleForm })}>
          <AddUserForm title={title} dispatch={dispatch} />
        </div>
      </div>
    </section>
  );
};

export default AddUser;
