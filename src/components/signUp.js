import React, { useState } from 'react';

const SignInModal = ({fun}) => {
   const [login,setLogin]=useState(false);
  return (
    <div  className='overlay flex-column justify-content-center  align-items-center'>
    <img src="close.png" style={{marginLeft:'820px',cursor:'pointer'}} onClick={()=>{window.location.reload()}}/>
      {login?<><div className='w-50 h-50 d-none d-md-block'>
        <div style={{backgroundColor:'rgba(239, 255, 244, 1)',height:'40px'}} className='d-flex justify-content-center  align-items-center w-100 rounded-top'>
           <span style={{color:' rgba(0, 138, 69, 1)'}} >Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</span>
        </div>
        <div className='d-flex pt-4 ' style={{backgroundColor:' rgba(255, 255, 255, 1)'}}>
            <div className='d-flex flex-column ml-5'>
                <span className='text-left' style={{fontSize:'1.2rem',fontWeight:'bold'}} >Sign In</span>
                <div className='d-flex flex-column mt-3'>
                    <input type='text' placeholder='Email' style={{height:'38px', width:'260px'}}/>
                    <input type='text' placeholder='Password' style={{height:'38px'}}/>
                </div>
                <button className='mt-4 bg-primary text-light border-0 ' style={{borderRadius:'20px',height:'38px'}}>Sign In</button>
                <div className='d-flex border justify-content-center  align-items-center mt-3 '  style={{height:'38px',cursor:'pointer'}}><img className='mr-1 mt-1' src="f_logo_RGB-Blue_1024.png"/><span>Sign up with Facebook</span></div>
                <div className=' d-flex justify-content-center  align-items-center border mt-3'  style={{height:'38px',cursor:'pointer'}}><img className='mr-1 mt-1' src="search.png"/><span>Sign up with Google</span></div>
            </div>
            <div className='d-flex flex-column ml-5'>
                <p><span>Don't have an account yet? </span><span className='text-primary' style={{cursor:'pointer'}} onClick={()=>{setLogin(false); console.log('clicked')}}>Create new for free!</span></p>
                <img src='Group 3.png' className='h-100 w-100 '/>
            </div>
        </div>
      </div>
      <div className='d-flex flex-column  align-items-center  h-75 w-100  d-md-none '>
        <div className='d-flex flex-column  align-items-center pt-4  w-100 h-100 ' style={{backgroundColor:' rgba(255, 255, 255, 1)',borderRadius:'10px'}} >
            <div className='d-flex flex-column ml-0'>
                <div className='d-flex align-item-center justify-content-between '>
                    <span className='text-left' style={{fontSize:'1.5rem',fontWeight:'bold'}} >Welcome back!</span>
                    <img src='close.png' style={{backgroundColor:'black',borderRadius:'50%',height:'25px'}} className='mt-1'  onClick={()=>{window.location.reload()}}/>
                </div>
                <div className='d-flex flex-column mt-4'>
                    <input type='text' placeholder='Email' style={{height:'38px', width:'260px'}}/>
                    <input type='text' placeholder='Password' style={{height:'38px'}}/>
                </div>
                <div className='d-flex align-item-center justify-content-between mt-4'>
                    <button className=' bg-primary text-light border-0  ' style={{borderRadius:'20px',height:'38px',width:'100px'}}>Sign In</button>
                    <span style={{textDecoration:'underline',color:' rgba(73, 80, 87, 1)',fontSize:'0.9rem',fontWeight:'bold'}} className='text-align-center '  onClick={()=>{setLogin(false); console.log('clicked')}}>or, Create Account</span>
                </div>
                
                <div className='d-flex border justify-content-center  align-items-center mt-4 '  style={{height:'38px',cursor:'pointer'}}><img className='mr-1 mt-1' src="f_logo_RGB-Blue_1024.png"/><span>Sign up with Facebook</span></div>
                <div className=' d-flex justify-content-center  align-items-center border mt-3'  style={{height:'38px',cursor:'pointer'}}><img className='mr-1 mt-1' src="search.png"/><span>Sign up with Google</span></div>
                <div className='mt-3 font-weight-bold'><span>Forgot Password?</span></div>
            </div>
        </div>
      </div>
      </>:
      <>
        <div className='d-none d-md-block w-50 h-50'>
        <div style={{backgroundColor:'rgba(239, 255, 244, 1)',height:'40px'}} className=' d-none d-md-flex  justify-content-center  align-items-center w-100 rounded-top'>
           <span style={{color:' rgba(0, 138, 69, 1)'}} >Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</span>
        </div>
        <div className='d-flex pt-4 rounded-bottom ' style={{backgroundColor:' rgba(255, 255, 255, 1)'}}>
            <div className='d-flex flex-column  ml-4  w-50'>
               <div className='d-flex'>
                    <span className='text-left ' style={{fontSize:'1.2rem',fontWeight:'bold'}}>Create Account</span>
                    <img src="close.png" style={{marginLeft:'150px',cursor:'pointer',height:'30px'}} onClick={()=>{window.location.reload()}} className='d-none bg-dark rounded'/>
                </div>
                <div className='d-flex flex-row mt-3'>
                   
                    <input type='text' placeholder='First Name' style={{height:'38px'}} className='w-50'/>
                    <input type='text' placeholder='Last Name' style={{height:'38px'}} className='w-50'/>
                </div>
                <input type='email' className='w-100 ' placeholder='Email' style={{height:'38px'}}/>
                <input type='password' placeholder='Password' style={{height:'38px'}}/>
                <input type='password' placeholder='Confirm Password' style={{height:'38px'}}/>
                <button className='mt-4 bg-primary text-light border-0 ' style={{borderRadius:'20px',height:'38px'}}>Create Account</button>
                <div className='d-flex border justify-content-center  align-items-center mt-3 '  style={{height:'38px',cursor:'pointer'}}><img className='mr-1 mt-1' src="f_logo_RGB-Blue_1024.png"/><span>Sign up with Facebook</span></div>
                <div className=' d-flex justify-content-center  align-items-center border mt-3'  style={{height:'38px',cursor:'pointer'}}><img className='mr-1 mt-1' src="search.png"/><span>Sign up with Google</span></div>
            </div>
            <div className='d-flex flex-column'>
                <p><span>Already have account? </span><span className='text-primary' onClick={()=>{setLogin(true)}} style={{cursor:'pointer'}}>Sign In</span></p>
                <img src='Group 3.png' className='h-75 w-100 '/>
                <span style={{fontSize:'0.7rem'}} className='ml-4'>By signing up, you agree to our Terms & conditions, Privacy policy</span>
            </div>
        </div>
      </div>
      <div className='d-md-none w-100 h-100'>
      <div className='d-flex flex-column  align-items-center pt-4  w-100 h-100 ' style={{backgroundColor:' rgba(255, 255, 255, 1)',borderRadius:'10px'}} >
            <div className='d-flex flex-column ml-0'>
                <div className='d-flex align-item-center justify-content-between '>
                    <span className='text-left' style={{fontSize:'1.5rem',fontWeight:'bold'}} >Create Account</span>
                    <img src='close.png' style={{backgroundColor:'black',borderRadius:'50%',height:'25px'}} className='mt-1'  onClick={()=>{window.location.reload()}}/>
                </div>
                <div className='d-flex flex-column mt-4'>
                        <div className='d-flex flex-row mt-3'>
                        
                        <input type='text' placeholder='First Name' style={{height:'38px'}} className='w-50'/>
                        <input type='text' placeholder='Last Name' style={{height:'38px'}} className='w-50'/>
                    </div>
                        <input type='email' className='w-100 ' placeholder='Email' style={{height:'38px'}}/>
                        <input type='password' placeholder='Password' style={{height:'38px'}}/>
                        <input type='password' placeholder='Confirm Password' style={{height:'38px'}}/>
                </div>
                <div className='d-flex align-item-center justify-content-between mt-4'>
                    <button className=' bg-primary text-light border-0  ' style={{borderRadius:'20px',height:'38px',width:'200px'}}>Create Account</button>
                    <span style={{textDecoration:'underline',color:' rgba(73, 80, 87, 1)',fontSize:'0.9rem',fontWeight:'bold'}} className='text-align-center '  onClick={()=>{setLogin(true); console.log('clicked')}}>or, Sign In</span>
                </div>
                
                <div className='d-flex border justify-content-center  align-items-center mt-4 '  style={{height:'38px',cursor:'pointer'}}><img className='mr-1 mt-1' src="f_logo_RGB-Blue_1024.png"/><span>Sign up with Facebook</span></div>
                <div className=' d-flex justify-content-center  align-items-center border mt-3'  style={{height:'38px',cursor:'pointer'}}><img className='mr-1 mt-1' src="search.png"/><span>Sign up with Google</span></div>
                <div className='mt-3'><span>By signing up, you agree to our Terms &<br/> conditions, Privacy policy</span></div>
            </div>
        </div>
      </div>
      </>
      }
    </div>
  );
};

export default SignInModal;
