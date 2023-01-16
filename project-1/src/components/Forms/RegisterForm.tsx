import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Button from "../Button/Button"
import Input from "../Input/Input"
import Or from "../Or/Or"
import SocialButtonList from '../SocialButtonList/SocialButtonList'
import Checkbox from '../Checkbox/Checkbox'

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
        <div className="w-3/4 h-3/4 md:w-2/6 lg:w-1/4 flex flex-col items-center gap-5 p-10 rounded-lg text-black shadow-[0_4px_6px_rgba(0,0,0,0.3)] bg-white">
            <p className="w-full uppercase text-left font-bold">Sign up</p>
            <Input type="email" id="email" name="Email" onInputChange={(email: string) => setEmail(email)}/>
            <Input type="password" id="password" name="Password" onInputChange={(password: string) => setPassword(password)}/>
            <Button color="primary" onClick={handleRegisterSubmit}>Sign up</Button>
            <Or text='Or'/>
            <SocialButtonList />   
            <div className='flex gap-1 text-sm text-gray-500 cursor-pointer'><p>Already a user?</p><Link to='/login' className='underline'>SIGN IN</Link></div>
        </div>
    )
}

export default RegisterForm