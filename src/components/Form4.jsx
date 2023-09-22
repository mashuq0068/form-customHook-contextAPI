import { useContext } from "react";
import useCustomHook from "../customHook";
import { Data } from "../main";



const Form4 = () => { 
    // const [name , handleName] = useCustomHook();
    const input = useCustomHook()
    console.log(input)
    const emailValue = useCustomHook()
    const passwordValue = useCustomHook()
    const handleFullForm = event => { 
        event.preventDefault();
}
  const dataForForm4 = useContext(Data);

    
    return (
        <>
        <div className="text-center flex items-center  bg-pink-100 h-screen">
            <form  onSubmit={handleFullForm} className="space-y-5 flex flex-col justify-center w-[30%] text-center  mx-auto " >
            <input {...input}  className="px-4  py-3 focus:border-2 focus:outline-pink-400 focus:border-pink-400  rounded-lg shadow-xl border-pink-200 "  type="name" name="text" id="" />
            <input {...emailValue}  className="px-4 py-3  focus:border-2 focus:outline-pink-400 focus:border-pink-400 rounded-lg shadow-xl border-pink-200"  type="email" name="email" id="" />
            <input  {...passwordValue} className="px-4 py-3  focus:border-2 focus:outline-pink-400  rounded-lg drop-shadow-xl  border-pink-200"  type="password" name="password" id="" />
            <input  className="mx-auto mt-5 focus:border-2 border-pink-400   w-[30%] cursor-pointer bg-pink-400 hover:bg-pink-600 px-3 py-2 rounded-lg shadow-xl " type="submit" value="submit" />
            <p>{dataForForm4}</p>
            </form>
        </div>
        <div> 
           <p>{input.value}</p>
            <p>{emailValue.value}</p>
            <p>{passwordValue.value}</p>
        </div>
        </>
    );
};

export default Form4;