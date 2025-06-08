import React, { useEffect, useState, useContext } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion'
import axios from 'axios'
import { toast } from 'react-toastify';


const Login = () => {
  const [state, setState] = useState('Login');
  const {setShowLogin, backendUrl, setToken, setUser} = useContext(AppContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const onSubmitHandler = async (e) =>{
    e.preventDefault();
    try {
      if(state === 'Login'){
      const {data} =  await axios.post(backendUrl + '/api/user/login', {email, password})
      if(data.success){
         setToken(data.token)
         setUser(data.user)
         localStorage.setItem('token', data.token)
         setShowLogin(false)
      }else{
         toast.error(data.message)
      }

    }else{
      const {data} =  await axios.post(backendUrl + '/api/user/register', {name,email, password})
      if(data.success){
         setToken(data.token)
         setUser(data.user)
         localStorage.setItem('token', data.token)
         setShowLogin(false)
      }else{
         toast.error(data.message)
      }
    }
    } catch (error) {
      toast.error(error.message)
    }
  }


  useEffect(()=>{
     document.body.style.overflow = 'hidden';

     return ()=>{
        document.body.style.overflow = 'unset';
     }
  },[])

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <motion.form onSubmit={onSubmitHandler}
      initial={{opacity:0.2, y:50}}
      transition={{duration:0.3}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      className="bg-white p-8 rounded-lg shadow-md w-80">
        <h1 className="text-2xl font-semibold mb-2">{state}</h1>
        <p className="text-gray-600 text-sm mb-6">Welcome back! Please sign in to continue</p>

        {/* Show name input only on Sign Up */}
        {state !== 'Login' && (
          <div className="flex items-center gap-2 border rounded px-3 py-2 mb-4">
            <img src={assets.user_icon} alt="User Icon" className="w-5 h-5" />
            <input
              onChange={e=> setName(e.target.value)} value={name}
              type="text"
              placeholder="Full Name"
              required
              className="outline-none w-full text-sm"
            />
          </div>
        )}

        <div className="flex items-center gap-2 border rounded px-3 py-2 mb-4">
          <img src={assets.email_icon} alt="Email Icon" className="w-5 h-5" />
          <input
            onChange={e=> setEmail(e.target.value)} value={email}
            type="email"
            placeholder="Enter your email"
            required
            className="outline-none w-full text-sm"
          />
        </div>

        <div className="flex items-center gap-2 border rounded px-3 py-2 mb-4">
          <img src={assets.lock_icon} alt="Lock Icon" className="w-5 h-5" />
          <input
            onChange={e=> setPassword(e.target.value)} value={password}
            type="password"
            placeholder="Password"
            required
            className="outline-none w-full text-sm"
          />
        </div>

        <p className="text-sm text-blue-600 my-4 cursor-pointer">Forgot password?</p>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          {state === 'Login' ? 'Login' : 'Create Account'}
        </button>

        {/* Toggle between Login and Sign Up */}
        {state === 'Login' ? (
          <p className="mt-5 text-center">
            Don't have an account?{' '}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState('Sign Up')}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already have an account?{' '}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState('Login')}
            >
              Login
            </span>
          </p>
        )}
      </motion.form>

      <img
  src={assets.cross_icon}
  alt="Close Login Modal"
  onClick={() => setShowLogin(false)}
  className="absolute top-5 right-5 w-6 h-6 cursor-pointer hover:scale-110 transition-transform duration-200"
/>
    </div>
  );
};

export default Login;
