import React, {useState, useEffect} from 'react'
import Button from "../Button/Button"
import Input from "../Input/Input"
import Or from "../Or/Or"
import SocialButtonList from '../SocialButtonList/SocialButtonList'
import Checkbox from '../Checkbox/Checkbox'

type formData = {
    Email: string;
    Password: string;
    Remember: boolean;
}


function Form(){
    const [formData, setFormData] = useState<formData>({Email: '', Password: '', Remember: false});
    const [isRegister, setIsRegister] = useState(true);

    const handleSigningUpOrIn = () => {
        setIsRegister(prev => !prev);
    }

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value, checked} = e.currentTarget;
        setFormData({...formData , [name]: name == 'Remember' ? checked : value});
    }

    const handleRegisterSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        //Make request to backend
        console.log('Register:');
        console.log(formData.Email);
        console.log(formData.Password);
        console.log('---------------');
    }

    const handleLoginSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        //Make request to backend
        console.log('Login:');
        console.log(formData.Email);
        console.log(formData.Password);
        console.log(formData.Remember);
        console.log('---------------');
    }

    return (
        <form className="w-3/4 h-3/4 md:w-2/6 lg:w-1/4 flex flex-col items-center gap-5 p-10 rounded-lg text-black shadow-[0_4px_6px_rgba(0,0,0,0.3)] bg-white">
            {isRegister ? <>
                <p className="w-full uppercase text-left font-bold">Sign up</p>
            </> : <>
                <p className="w-full uppercase text-left font-bold">Sign in</p>
            </>}

            <Input type="email" id="email" name="Email" onChange={handleFormChange}/>
            <Input type="password" id="password" name="Password" onChange={handleFormChange}/>
            {isRegister ? <>
                <Button color="primary" onClick={handleRegisterSubmit}>Sign up</Button>
            </> : <>
                <Checkbox id="remember" name="Remember" onChange={handleFormChange}>Remember me?</Checkbox>
                <Button color="primary" onClick={handleLoginSubmit}>Sign in</Button>
            </>}

            <Or />
            <SocialButtonList />

            {isRegister ? <>
                <div className='flex gap-1 text-sm'><p>Already a user?</p><a onClick={handleSigningUpOrIn} className='underline'>SIGN IN</a></div>
            </> : <>
                <div className='flex gap-1 text-sm'><p>Need an account?</p><a onClick={handleSigningUpOrIn} className='underline'>SIGN UP</a></div>
            </>}
        </form>
    )
}

export default Form