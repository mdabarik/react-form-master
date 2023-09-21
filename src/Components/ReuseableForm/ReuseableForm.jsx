import './ReuseableForm.css';

const ReuseableForm = ({formTitle, handleSubmit, submitBtnText='submit', children}) => {

    const handleLogingSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data);
    }

    console.log(children);

    return (
        <div>
            <h2>{formTitle}</h2>
            <form className='form' onSubmit={handleLogingSubmit}>
                <input 
                    type="text" 
                    name="username" 
                    placeholder="Your Name"/>
                <br />

                <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" />
                <br />

                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" />
                <br />

                <input 
                    type="submit" 
                    value={submitBtnText} 
                    className='btn btn-primary'/>
            </form>
        </div>
    );
};

export default ReuseableForm;