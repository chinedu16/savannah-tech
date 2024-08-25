// validationSchema.ts
import * as yup from 'yup';

export const signup = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
  name: yup
    .string()
    .min(3, 'Name must be at least 3 characters')
    .max(25, 'Name must be at most 25 characters')
    .required('Name is required'),
});

export const login = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  
});



