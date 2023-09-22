import {useEffect,  useRef } from "react";


const Form3 = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null)
    useEffect(()=>{
       nameRef.current.focus();
    
    } ,[])
    const handleFullForm = event =>{ 
        event.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
        
}
    
    return (
        <>
        <div className="text-center flex items-center  bg-pink-100 h-screen">
            <form onSubmit={handleFullForm} className="space-y-5 flex flex-col justify-center w-[30%] text-center  mx-auto " >
            <input ref={nameRef}  className="px-4  py-3 focus:border-2 focus:outline-pink-400 focus:border-pink-400  rounded-lg shadow-xl border-pink-200 "  type="name" name="text" id="" />
            <input ref={emailRef} className="px-4 py-3  focus:border-2 focus:outline-pink-400 focus:border-pink-400 rounded-lg shadow-xl border-pink-200"  type="email" name="email" id="" />
            <input ref={passwordRef} className="px-4 py-3  focus:border-2 focus:outline-pink-400  rounded-lg drop-shadow-xl  border-pink-200"  type="password" name="password" id="" />
            <input  className="mx-auto mt-5 focus:border-2 border-pink-400   w-[30%] cursor-pointer bg-pink-400 hover:bg-pink-600 px-3 py-2 rounded-lg shadow-xl " type="submit" value="submit" />
            </form>
        </div>
        {/* <div> 
           <p>{nameRef.current.value}</p>
            <p>{emailRef.current.value}</p>
            <p>{passwordRef.current.value}</p>
        </div> */}
        </>
    );
};

export default Form3;