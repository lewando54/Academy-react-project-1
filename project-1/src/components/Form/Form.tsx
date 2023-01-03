import React, {useState, useEffect} from 'react'
import Button from "../Button/Button"
import Input from "../Input/Input"
import Or from "../Or/Or"
import SocialButtonList from '../SocialButtonList/SocialButtonList'
import Checkbox from '../Checkbox/Checkbox'

type registerData = {
    Email: string;
    Password: string;
    Remember: boolean;
}


function Form(){
    const [registerFormData, setRegisterFormData] = useState<registerData>({Email: '', Password: '', Remember: false});
    const [isRegister, setIsRegister] = useState(true);

    const handleSigningUpOrIn = () => {
        setIsRegister(prev => !prev);
    }

    const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value, checked} = e.currentTarget;
        setRegisterFormData({...registerFormData , [name]: name == 'Remember' ? checked : value});
    }

    const handleRegisterSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        //Make request to backend
        console.log(registerFormData.Email);
        console.log(registerFormData.Password);
        console.log(registerFormData.Remember);
    }

    return (
        <form className="w-3/4 h-3/4 flex flex-col items-center gap-5 p-10 rounded-lg text-black shadow-[0_4px_6px_rgba(0,0,0,0.3)] bg-white">
            {isRegister ? <>
                <p className="w-full uppercase text-left">Sign up</p>
            </> : <>
                <p className="w-full uppercase text-left">Sign in</p>
            </>}

            <Input type="email" id="email" name="Email" onChange={handleRegisterChange}/>
            <Input type="password" id="password" name="Password" onChange={handleRegisterChange}/>
            {isRegister ? <>
                <Button color="primary" onClick={handleRegisterSubmit}>Sign up</Button>
            </> : <>
                <Checkbox id="remember" name="Remember" onChange={handleRegisterChange}>Remember me?</Checkbox>
                <Button color="primary" onClick={handleRegisterSubmit}>Sign in</Button>
            </>}

            <Or />
            <SocialButtonList />

            {isRegister ? <>
                <div className='flex gap-1 text-sm'><p>Already a user?</p><a onClick={handleSigningUpOrIn} className='decoration-teal-900'>SIGN IN</a></div>
            </> : <>
                <div className='flex gap-1 text-sm'><p>Need an account?</p><a onClick={handleSigningUpOrIn} className='decoration-teal-900'>SIGN UP</a></div>
            </>}
        </form>
    )
}

export default Form