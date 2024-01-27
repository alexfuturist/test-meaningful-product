import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string().email('Error').matches(/@.*\./, 'Error').required('field is required'),
});
