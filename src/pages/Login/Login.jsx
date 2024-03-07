import { useDispatch } from 'react-redux';
import Form from '../../components/Form';
import React from 'react';
import { loginThunk } from '../../redux/auth/operations';

const Login = () => {
    const dispatch = useDispatch()
    const handleSubmit = (data) => {
        dispatch(loginThunk(data))
    }
    const values = {
        email: 'StepanUA@mail.com.ua',
        password: 'StepanUA@mail.com.ua',
    }
    return (
        <div>
            <Form formType='login' onDataSubmit={handleSubmit} values={ values} />
        </div>
    );
}

export default Login;
