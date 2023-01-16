import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Button from "../Button/Button"
import Input from "../Input/Input"
import Or from "../Or/Or"
import SocialButtonList from '../SocialButtonList/SocialButtonList'
import Checkbox from '../Checkbox/Checkbox'
import FormContainer from './FormContainer'
import FormTitle from './FormTitle'

function Form(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLoginSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        //Make request to backend
        console.log('Login:');
        console.log(email);
        console.log(password);
        console.log(rememberMe);
        console.log('---------------');
    }

    return (
        <FormContainer>
            <FormTitle>Login</FormTitle>
            <Input type="email" id="email" name="Email" onInputChange={(email: string) => setEmail(email)}/>
            <Input type="password" id="password" name="Password" onInputChange={(password: string) => setPassword(password)}/>
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