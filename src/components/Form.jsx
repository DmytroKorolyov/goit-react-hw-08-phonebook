import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import s from './Form.module.css'
import { Link } from 'react-router-dom';
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa'


const Form = ({ onDataSubmit, formType, values }) => {
    const [type, setType] = useState('password')

    const { register, reset, handleSubmit, formState: {errors} } = useForm({
        defaultValues: values, 
    })

    const submit = (data) => {
        console.log(data)
        onDataSubmit(data)
        reset()
    }
    return (
        <div className={s.wrapperForm}>
            <form className={s.form} onSubmit={handleSubmit(submit)}>
                {formType !== 'login' && (<div className={s.inputField}>
                    <label htmlFor='name'>Name:</label>
                    <input id='name' placeholder='Enter name' {...register('name', { required: { message: 'Name is required', value: true }, minLength: { value: 1, message: 'Name must be more then 1 chars' }, maxLength: { value: 30, message: 'Name must be less then 30 chars' }, })} />
                    {errors?.name && <span>{errors.name.message }</span>}
                </div>)}
                <div className={s.inputField}>
                    <label htmlFor='email'>Email:</label>
                    <input id='email' placeholder='Enter email' {...register('email', { required: { message: 'Email is required', value: true }, minLength: { value: 1, message: 'Email must be more then 1 chars' }, maxLength: { value: 30, message: 'Name must be less then 30 chars' }, })} type="email" />
                    {errors?.email && <span>{errors.email.message }</span>}
                </div>
                <div className={s.inputField}>
                    <label htmlFor='password'>Password:</label>
                    <input id='password' placeholder='Enter password' {...register('password', { required: { message: 'Password is required', value: true }, minLength: { value: 5, message: 'Password must be more then 5 chars' }, maxLength: { value: 30, message: 'Password must be less then 30 chars' }, })} type={type} />
                    <div onClick={() => setType(type === 'password' ? 'text' : 'password')} className={s.iconBtn}>
                        {type === 'password' ? <FaRegEyeSlash /> : <FaRegEye />}
                                               
                    </div>
                     
                    {errors?.password && <span>{errors.password.message }</span>}
                </div>
                                                
                <button>{formType === 'login' ? 'Login' : 'Register'}</button>
                <p className={s.link}>
                    {formType !== 'login' ? 'You already have account?' : 'You do not have account?'}
                    {formType === 'login' ? <Link to='/register'>Sign in</Link> : <Link to='/login'>Sign up</Link>} </p>
            </form>
        </div>
    );
}

export default Form;
