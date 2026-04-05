import useFormOnChange from "../../hooks/FormOnChange";


const HookForm = () => {
    const [name, setName] = useFormOnChange('');
    const [email, setEmail] = useFormOnChange('');
    const [password, setPassword] = useFormOnChange('');

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log('Submitted', name, email, password);
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={setName} defaultValue={name} />
                <br />
                <input type="Email" name="email" placeholder="Email" onChange={setEmail} defaultValue={email} />
                <br />
                <input type="Password" name="password" placeholder="Password" onChange={setPassword} defaultValue={password} />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
     );
}
 
export default HookForm;