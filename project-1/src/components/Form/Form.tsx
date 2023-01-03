import React, {useState, useEffect} from 'react'
import Button from "../Button/Button"
import Input from "../Input/Input"
import Or from "../Or/Or"
import SocialButtonList from '../SocialButtonList/SocialButtonList'

type registerData = {
    Email: string;
    Password: string;
}

function Form(){
    const [registerFormData, setRegisterFormData] = useState<registerData>({Email: '', Password: ''});
    const [isRegister, setIsRegister] = useState(true);

    const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.currentTarget;
        setRegisterFormData({...registerFormData , [name]: value});
    }

    const handleRegisterSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        //Make request to backend
        console.log(registerFormData.Password);
    }

    return (
        <form className="w-3/4 h-3/4 flex flex-col items-center gap-5 p-10 rounded-lg text-black shadow-[0_4px_6px_rgba(0,0,0,0.3)] bg-white">
            <p className="w-full uppercase text-left">Sign up</p>
            <Input type="email" id="email" name="Email" onChange={handleRegisterChange}/>
            <Input type="password" id="password" name="Password" onChange={handleRegisterChange}/>
            <Button color="primary" onClick={handleRegisterSubmit}>Sign up</Button>
            <Or />
            <SocialButtonList />
        </form>
    )
}

export default Form