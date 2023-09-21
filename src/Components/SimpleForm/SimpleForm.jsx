
const SimpleForm = () => {

    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const username = e.target.username.value;
        const password = e.target.password.value;
        console.log(email, username, password);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" id="" placeholder="Your Name"/>
                <br />
                <input type="email" name="email" id="" placeholder="Your Email" />
                <br />
                <input type="password" name="password" placeholder="Password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;