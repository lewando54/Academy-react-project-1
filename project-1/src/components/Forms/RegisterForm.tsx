import React, {useRef} from 'react'
import {Link} from 'react-router-dom'
import Button from "../Button/Button"
import Input from "../Input/Input"
import Or from "../DividerWithText/DividerWithText"
import SocialButtonList from '../SocialButtonList/SocialButtonList'
import FormContainer from './FormContainer.style'
import FormTitle from './FormTitle.style'

function RegisterForm(){
    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    const handleRegisterSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        //Make request to backend
        console.log('Register:');
        console.log(emailInputRef.current!.value);
        console.log(passwordInputRef.current!.value);
        console.log('---------------');
    }

    return (
        <FormContainer>
            <FormTitle>Sign up</FormTitle>
            <Input innerRef={emailInputRef} type="email" id="email" name="Email"/>
            <Input innerRef={passwordInputRef} type="password" id="password" name="Password"/>
            <Button color="primary" onClick={handleRegisterSubmit}>Sign up</Button>
            <Or text='OR'/>
            <SocialButtonList />   
            <div className='flex gap-1 text-sm text-gray-500'><p>Already a user?</p><Link to='/login' className='underline'>SIGN IN</Link></div>
        </FormContainer>
    )
}

export default RegisterForm