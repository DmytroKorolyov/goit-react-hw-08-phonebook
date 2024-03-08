import { useDispatch } from 'react-redux';
import Form from '../../components/Form';
import React from 'react';
import { loginThunk } from '../../redux/auth/operations';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    console.log(location);
    const handleSubmit = data => {
        dispatch(loginThunk(data))
            .unwrap()
            .then(data => {
                toast.success(`Welcome back, ${data.user.name}`)
           navigate(location.state?.from || '/', {replace: true})
            })
            .catch(err => { toast.error('Credentials is not valid') })
        
    }
    const values = {
        email: 'StepanUA@mail.com.ua',
        password: 'StepanUA@mail.com.ua',
    }
    return (
        <div>
            <Form formType='login' onDataSubmit={handleSubmit} values={{}} />
        </div>
    );
}

export default Login;
