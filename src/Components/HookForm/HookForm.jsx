import useInputState from "../../hooks/HookForm/useInputTest";



const HookForm = () => {
    const [name, setName] = useInputState('barik')

    const handleSubmit = e => {
        console.log(name);
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text" name="username" placeholder="Your Name"/>
                <br />
                <input type="email" name="email" placeholder="Your Email" />
                <br />
                <input type="password" name="password" placeholder="Password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;