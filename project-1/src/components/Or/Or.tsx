// Komponent linii z okienkiem na tekst

interface divider{
    text?: string
}



function Or({text}: divider){
    const Text = (text != undefined) ? <p className="p-1 border-2 text-gray-400 rounded-md text-sm">{text}</p> : '';

    return (
        <div className="flex w-full items-center">
            <hr className="border-t-2 w-full"/>
            {Text} 
            <hr className="border-t-2 w-full"/>
        </div>
    )
}

export default Or;