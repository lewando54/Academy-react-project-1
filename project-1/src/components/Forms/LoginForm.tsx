import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Button from "../Button/Button"
import Input from "../Input/Input"
import Or from "../Or/Or"
import SocialButtonList from '../SocialButtonList/SocialButtonList'
import Checkbox from '../Checkbox/Checkbox'

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
        <div className="w-3/4 h-3/4 md:w-2/6 lg:w-1/4 flex flex-col items-center gap-5 p-10 rounded-lg text-black shadow-[0_4px_6px_rgba(0,0,0,0.3)] bg-white">
            <p className="w-full uppercase text-left font-bold">Login</p>
            <Input type="email" id="email" name="Email" onInputChange={(email: string) => setEmail(email)}/>
            <Input type="password" id="password" name="Password" onInputChange={(password: string) => setPassword(password)}/>
            <Checkbox id="remember" name="Remember" onChecked={(rememberMe: boolean) => setRememberMe(rememberMe)}>Remember me?</Checkbox>
            <Button color="primary" onClick={handleLoginSubmit}>Login</Button>
            <a className='w-full text-sm text-gray-400 text-right cursor-pointer -mt-2'>Forgot password?</a>
            <Or text='Or'/>
            <SocialButtonList />
            <div className='flex gap-1 text-sm text-gray-500 cursor-pointer'><p>Need an account?</p><Link to='/register' className='underline'>SIGN UP</Link></div>
        </div>
    )
}

export default Form