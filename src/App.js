import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar';
import Banner from './components/banner';
import Post from './components/posts';
import SignInModal from './components/signUp';
function App() {
  const [signIn,setSignIn]=useState(false);
  const handleClick=()=>{
    setSignIn(prevSignIn => !prevSignIn);
  }
  return (

    <div className="App">
      <Navbar fun={handleClick}/>
      <Banner fun={handleClick}/>
      {signIn&&<SignInModal />}
      <Post/>
    </div>

  );
}

export default App;
