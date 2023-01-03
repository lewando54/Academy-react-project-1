interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string
}

function Input({id, ...props}: InputProps){
    return (
        <div className="w-full">
            <label htmlFor={id}>{props.name}</label>
            <input id={id} className="w-full border-2 bg-white rounded-md text-lg p-1" {...props}/>
        </div>
    )
}

export default Input