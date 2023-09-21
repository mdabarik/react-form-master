import './App.css'
import Grandpa from './Components/Grandpa/Grandpa';
import ReuseableForm from './Components/ReuseableForm/ReuseableForm'
// import HookForm from './Components/HookForm/HookForm'
// import RefForm from './Components/RefForm/RefForm'

function App() {

  const handleSignUpSubmit = data => {
    console.log('sign up', data);
  }

  const handleLogingSubmit = data => {
    console.log('login', data);
  }

  return (
    <>
      <h1 className='text-4xl font-bold uppercase'>Form Master</h1>

      <Grandpa></Grandpa>



      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReuseableForm
        formTitle={"Sign Up"}
        handleSubmit={handleSignUpSubmit}
        submitBtnText={"Sign Up Now"}>
        <div>
          <h2>Sign Up</h2>
          <p>Sign up right now</p>
        </div>
      </ReuseableForm>

      <ReuseableForm
        formTitle={"Login"}
        handleSubmit={handleLogingSubmit}
        submitBtnText={"Login Now"}>
        <div>
          <h2>Login</h2>
          <p>Login right now</p>
        </div>
      </ReuseableForm>
    </>
  )
}

export default App
