import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Button from "../Button/Button"
import Input from "../Input/Input"
import Or from "../DividerWithText/DividerWithText"
import SocialButtonList from '../SocialButtonList/SocialButtonList'
import Checkbox from '../Checkbox/Checkbox'
import FormContainer from './FormContainer.style'
import FormTitle from './FormTitle.style'

function RegisterForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState('');

    const handleRegisterSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        //Make request to backend
        console.log('Register:');
        console.log(email);
        console.log(password);
        console.log('---------------');
    }

    return (
        <FormContainer>
            <FormTitle>Sign up</FormTitle>
            <Input type="email" id="email" name="Email" onInputChange={(email: string) => setEmail(email)}/>
            <Input type="password" id="password" name="Password" onInputChange={(password: string) => setPassword(password)}/>
            <Button color="primary" onClick={handleRegisterSubmit}>Sign up</Button>
            <Or text='OR'/>
            <SocialButtonList />   
            <div className='flex gap-1 text-sm text-gray-500'><p>Already a user?</p><Link to='/login' className='underline'>SIGN IN</Link></div>
        </FormContainer>
    )
}

export default RegisterForm