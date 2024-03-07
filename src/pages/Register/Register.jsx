import { useDispatch } from 'react-redux';
import Form from '../../components/Form';
import React from 'react';
import { registerThunk } from '../../redux/auth/operations';

const Register = () => {
    const dispatch = useDispatch()
    const handleSubmit = (data) => {
        dispatch(registerThunk(data))
    }
    return (
        <div>
            <Form onDataSubmit={handleSubmit} />
        </div>
    );
}

export default Register;
