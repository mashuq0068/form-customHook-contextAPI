import { useState } from "react";


const Form1 = () => {
    const [text , seText] = useState(null)
    const [email , setEmail] = useState(null)
    const [password , setPassword] = useState()
    const handleFullForm = event =>{ 
        event.preventDefault()
        seText(event.target.text.value);
        setEmail(event.target.email.value)
        setPassword(event.target.password.value)

        
    }
    
    return (
        <>
        <div className="text-center flex items-center  bg-pink-100 h-screen">
            <form onSubmit={handleFullForm} className="space-y-5 flex flex-col justify-center w-[30%] text-center  mx-auto " >
            <input  className="  py-2 focus:border-2 focus:outline-pink-400 focus:border-pink-400  rounded-lg shadow-xl border-pink-200 "  type="text" name="text" id="" />
            <input className=" py-2  focus:border-2 focus:outline-pink-400 focus:border-pink-400 rounded-lg shadow-xl border-pink-200"  type="email" name="email" id="" />
            <input className=" py-2  focus:border-2 focus:outline-pink-400  rounded-lg drop-shadow-xl  border-pink-200"  type="password" name="password" id="" />
            <input  className="mx-auto mt-5 focus:border-2 border-pink-400   w-[30%] cursor-pointer bg-pink-400 hover:bg-pink-600 px-3 py-2 rounded-lg shadow-xl " type="submit" value="submit" />
            </form>
        </div>
        <div>
            <p>{text}</p>
            <p>{email}</p>
            <p>{password}</p>
        </div>
        </>
    );
};

export default Form1;