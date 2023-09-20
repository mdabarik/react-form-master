
const SimpleForm = () => {

    const handleSubmit = e => {
        e.preventDefault();
        
        console.log();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" id="" placeholder="Your Name"/>
                <br />
                <input type="email" name="email" id="" placeholder="Your Email" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;