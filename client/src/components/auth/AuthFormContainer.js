import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import * as Yup from 'yup';
import AuthForm from './AuthForm';
import authOperations from '../../redux/operations/authOperation';
import { getUsersBooksOperetion } from '../../redux/operations/bookOperation';

const AuthFormContainer = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const [showNotif, setShowNotif] = useState(false);

    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const errorMessagesSchemaSignUp = Yup.object().shape({
        username: Yup.string()
            .min(2, 'Minimum number of characters 2')
            .max(30, 'Maximum number of characters 30')
            .required('Enter a name'),

        email: Yup.string()
            .required('Enter email')
            .matches(regex, 'Email format is incorrect'),

        password: Yup.string()
            .min(6, 'Minimum number of characters 6')
            .max(20, 'Maximum number of characters 20')
            .required('Enter password'),

        passwordConfirmation: Yup.string().oneOf(
            [Yup.ref('password')],
            'Passwords must match',
        ),
    });
    const errorMessagesSchemaSignIn = Yup.object().shape({
        email: Yup.string()
            .required('Enter email')
            .matches(regex, 'Email format is incorrect'),

        password: Yup.string()
            .min(6, 'Minimum number of characters 6')
            .max(20, 'Maximum number of characters 20')
            .required('Enter password'),
    });
    const errorMessagesSchema =
        location.pathname === '/signup'
            ? errorMessagesSchemaSignUp
            : errorMessagesSchemaSignIn;

    const handleSubmit = values => {
        location.pathname === '/signup' ? signUp(values) : signIn(values);
    };

    const signUp = async values => {
        try {
            await dispatch(
                authOperations.regOperation({
                    username: values.username,
                    email: values.email,
                    password: values.password,
                }),
            );
        } catch (err) {
            err.message === 'Email in use' && setShowNotif(true);
        }
    };

    const signIn = async values => {
        try {
            await dispatch(authOperations.logInOperation(values));
            await dispatch(getUsersBooksOperetion());
        } catch (err) {
            err.message === 'Email or password is wrong' && setShowNotif(true);
        }
    };

    return (
        <AuthForm
            handleSubmit={handleSubmit}
            errorMessagesSchema={errorMessagesSchema}
            showNotif={showNotif}
            setShowNotif={setShowNotif}
        />
    );
};

export default AuthFormContainer;
