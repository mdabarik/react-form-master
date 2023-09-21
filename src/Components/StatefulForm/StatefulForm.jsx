import { useState } from "react";

const StatefulForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if (error.length === 0) {
            setError("password must be 6 char long");
        } else {
            setError('');
        }
        console.log(name, email, password);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleNameChange = e => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                onChange={handleNameChange}
                    type="text" name="name"  placeholder="Your Name"/>
                <br />
                <input 
                    value={email}
                    onChange={handleEmailChange}
                    type="email" name="email" placeholder="Your Email" />
                <br />
                <input 
                    value={password}
                    onChange={handlePasswordChange}
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    required/>
                <br />
                <input 
                    onChange={handleNameChange}
                    type="submit" value="Submit" />
            </form>
            {
                error && <p>{error}</p>
            }
        </div>
    );
};

export default StatefulForm;