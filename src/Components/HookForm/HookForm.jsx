import useInputState from "../../hooks/HookForm/useInputTest";



const HookForm = () => {
    // const [name, setName] = useInputState('barik')
    const emailState = useInputState('Email >>>')

    const handleSubmit = e => {
        console.log(emailState.value);
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    // onChange={setName}
                    // value={name}
                    type="text" name="username" placeholder="Your Name"/>
                <br />
                <input 
                {...emailState}
                type="email" name="email" placeholder="Your Email" />
                <br />
                <input type="password" name="password" placeholder="Password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;