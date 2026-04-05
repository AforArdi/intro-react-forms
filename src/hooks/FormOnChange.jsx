import { useState } from "react";

const useFormOnChange = (defaultValue) => {
    const [formValue, setFormValue] = useState(defaultValue);

    const handleFieldChange=(e)=>{
        setFormValue(e.target.value);
    }
    return [formValue, handleFieldChange];
}
 
export default useFormOnChange;