import { useState } from "react"

const useCustomHook = (defaultValue = null)  => {
    const [value , setValue] = useState(defaultValue);
    // const handleValue = (e) =>{
    //       setValue(e.target.value)
    // }
    const onChange = (e) =>{
          setValue(e.target.value)
    }
    return {
        value,
        onChange
    }
}
export default useCustomHook;