import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const loginSchema = yup.object().shape({
  username: yup.string().min(3).max(50).required('*'),
  password: yup
    .string()
    .min(1)
    .matches(passwordRules, { message: 'Неправильный пароль' })
    .required('*'),
});

export const signupSchema = yup.object().shape({
  email: yup
    .string()
    .email('Введите, пожалуйста, действительный адрес электронной почты')
    .required('*'),
  username: yup.string().min(3, 'Слишком короткий!').max(50, 'Слишком длинный!').required('*'),
  password: yup
    .string()
    .min(1)
    .matches(passwordRules, { message: 'Пожалуйста, создайте более надежный пароль' })
    .required('*'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Пароли должны совпадать')
    .required('*'),
});

export const passwordSchema = yup.object().shape({});

export const phoneSchema = yup.object().shape({
  phone: yup.number().min(10, 'Must be more than 10 characters').required('This field is requried'),
});

export const codeSchema = yup.object().shape({
  code: yup.number().min(4).max(4).required('This field is requried'),
});
