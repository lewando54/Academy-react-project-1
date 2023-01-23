import React, {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import Button from "../Button/Button"
import Input from "../Input/Input"
import Or from "../DividerWithText/DividerWithText"
import SocialButtonList from '../SocialButtonList/SocialButtonList'
import Checkbox from '../Checkbox/Checkbox'
import FormContainer from './FormContainer.style'
import FormTitle from './FormTitle.style'

function Form(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const emailInputRef = useRef<HTMLInputElement>(null);
    // use ref
    // ForwardRef
    // use imperative handle

    const handleLoginSubmit = () => {
        //Make request to backend
        setEmail(emailInputRef.current!.value);
        console.log('Login:');
        console.log(email);
        console.log(password);
        console.log(rememberMe);
        console.log('---------------');
    }

    // przepisać tutaj onInputChange ()=>
    // Dodać ESLint - .eslintrc.js
    // <Input type="password" id="password" name="Password" onInputChange={onInputChange}/>

    return (
        <FormContainer>
            <FormTitle>Login</FormTitle>
            <Input innerRef={emailInputRef} type="email" id="email" name="Email"/>
            <Checkbox id="remember" name="Remember" onChecked={(rememberMe: boolean) => setRememberMe(rememberMe)}>Remember me?</Checkbox>
            <Button color="primary" onClick={handleLoginSubmit}>Login</Button>
            <a className='w-full text-sm text-gray-400 text-right cursor-pointer -mt-2'>Forgot password?</a>
            <Or text='OR'/>
            <SocialButtonList />
            <div className='flex gap-1 text-sm text-gray-500'><p>Need an account?</p><Link to='/register' className='underline'>SIGN UP</Link></div>
        </FormContainer>
    )
}

export default Form